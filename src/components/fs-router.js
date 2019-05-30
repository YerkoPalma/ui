/* global fetch customElements */
import { html } from 'https://unpkg.com/lit-element?module'
import { md } from '../lib/markdown.js'
import StyledComponent from './styled.js'

export default class FsRouter extends StyledComponent {
  static get properties () {
    return {
      defaultPage: {
        type: String
      },
      startPage: {
        type: String
      },
      content: {
        type: Object
      }
    }
  }
  constructor () {
    super()
    this.startPage = window.location.href.replace(/(.*?)\/?$/, '$1')
    this.content = html([this.innerHTML])
    this.initialContent = this.content
    window.addEventListener('popstate', e => {
      e.preventDefault()
      // fetch routes
      this.resolve().then(result => {
        this.content = result
      })
    })
    // fetch default content
    for (let attribute of Array.from(this.attributes)) {
      if (attribute.name === 'default-page') {
        this.resolve(attribute.value).then(result => { this.defaultContent = result })
      }
    }
  }
  updated (changedProperties) {
    let links = document.querySelectorAll('a[href]:not([data-updated])')
    Array.prototype.forEach.call(links, link => {
      if (!link.target) {
        // get link url
        const url = new URL(link.href)
        // only process local links
        if (window.location.origin === url.origin) {
          link.addEventListener('click', ev => {
            ev.preventDefault()
            this.resolve(link.href).then(result => {
              this.content = result
              window.history.pushState(undefined, link.href, link.href)
            })
          })
          link.setAttribute('data-updated', '')
        }
      }
    })
  }
  async resolve (path) {
    path = path || window.location.href
    if (path.replace(/(.*?)\/?$/, '$1') === this.startPage) return this.initialContent
    const isHtml = /\.html?$/i.test(path)
    const isMd = /\.(?:md|markdown)$/i.test(path)
    const maybeFolder = !isHtml && !isMd
    let response
    let result
    try {
      response = await fetch(path)
      if (response && response.ok) {
        result = await response.text()
        if (isMd) return html([md(result)])
        else return html([result])
      } else if (maybeFolder) {
        // maybe we need to add the extension or add an /index.(html|md) path
        // try adding extension first
        response = await fetch(`${path}.html`)
        if (response && response.ok) {
          // we found an html file
          result = await response.text()
          return html([result])
        } else {
          response = await fetch(`${path}.md`)
          if (response && response.ok) {
            // we found an md file
            result = await response.text()
            return html([md(result)])
          } else {
            // if we are here then we need to add an index file to the path
            // first try html
            response = await fetch(`${path}/index.html`)
            // we found index.html
            if (response && response.ok) {
              result = await response.text()
              return html([result])
            } else {
              // last chance, go for index.md
              response = await fetch(`${path}/index.md`)
              if (response && response.ok) {
                result = await response.text()
                return html([md(result)])
              }
            }
          }
        }
      }
    } catch (e) {
    }
    // if we are here, return default content
    return this.defaultContent
  }
  render () {
    return html`
    <style>
      ${this.customStyle ? this.customStyle : ''}
    </style>
    ${this.content}`
  }
}

// install
customElements.define('fs-router', FsRouter)
