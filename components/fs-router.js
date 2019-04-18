/* global fetch customElements */
import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element?module'
import { md } from 'https://unpkg.com/md?module'

export default class FsRouter extends LitElement {
  static get properties () {
    return {
      defaultPage: {
        type: String
      },
      content: {
        type: Object
      }
    }
  }
  constructor () {
    super()
    window.addEventListener('popstate', e => {
      e.preventDefault()
      // fetch routes
      this.resolve().then(result => { this.content = result })
    })
  }
  async resolve () {
    const isHtml = /\.html?$/i.test(window.location.pathname)
    const isMd = /\.(?:md|markdown)$/i.test(window.location.pathname)
    const maybeFolder = !isHtml && !isMd
    let response
    let result
    try {
      response = await fetch(window.location.pathname)
      if (response && response.ok) {
        result = await response.text()
        if (isHtml) return html([result])
        if (isMd) return html([md(result)])
      } else if (maybeFolder) {
        // maybe we need to add the extension or add an /index.(html|md) path
        // try adding extension first
        response = await fetch(`${window.location.pathname}.html`)
        if (response && response.ok) {
          // we found an html file
          result = await response.text()
          return html([result])
        } else {
          response = await fetch(`${window.location.pathname}.md`)
          if (response && response.ok) {
            // we found an html file
            result = await response.text()
            return html([md(result)])
          } else {
            // if we are here then we need to add an index file to the path
            // first try html
            
          }
        }
      }
    } catch (e) {
      
    }
  }
  render () {
    return this.content
  }
}

// install
customElements.define('fs-router', FsRouter)
