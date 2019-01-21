/* global fetch */
import markdown from 'https://unpkg.com/md?module'
import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element?module'

// export
export default class AppShell extends LitElement {
  static get properties () {
    return {
      controller: {
        type: String
      },
      default: {
        type: String
      },
      current: {
        type: Object
      }
    }
  }
  firstUpdated (changedProperties) {
    for (let key of changedProperties.keys()) {
      if (key === 'default') {
        if (this.default) {
          this.fetchTemplate(this.default).then(result => { this.current = result })
        } else {
          this.current = html`<div><slot></slot></div>`
        }
      }
    }
  }
  updated (changedProperties) {
    for (let key of changedProperties.keys()) {
      if (key === 'controller') {
        let controllerElement = document.querySelector(this.controller)
        const links = Array.from(controllerElement.querySelectorAll('a[href]'))
        links.forEach(link => {
          link.addEventListener('click', async e => {
            e.preventDefault()
            const target = e.target.href
            this.current = await this.fetchTemplate(target)
            window.history.pushState({}, null, target)
          })
        })
      }
    }
  }
  render () {
    return this.current
  }
  async fetchTemplate (template) {
    const NOT_FOUND_URL = 'content/404.html'
    let response
    let result
    const isMarkdown = template.split('.').pop() === 'md'
    const mdTemplate = md => {
      return html`<style>
        :host {
          font-family: sans-serif;
        }
        :host div {
          padding-left: 2rem;
        }
      </style>
      <div>
        ${html([markdown(md)])}
      </div>
      `
    }
    try {
      response = await fetch(template)
      if (response && response.ok) {
        result = await response.text()
      } else {
        response = await fetch(NOT_FOUND_URL)
        result = await response.text()
      }
    } catch (err) {
      console.log(err)
      response = await fetch(NOT_FOUND_URL)
      result = await response.text()
    }
    return isMarkdown ? mdTemplate(result) : html([result])
  }
}

// install
customElements.define('app-shell', AppShell)
