/* global fetch */
import markdown from 'https://unpkg.com/md?module'
import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element?module'

export default class MdView extends LitElement {
  static get properties () {
    return {
      src: {
        type: String
      },
      content: {
        type: Object
      }
    }
  }
  constructor () {
    super()
    this.content = html`<div><slot></slot></div>`
  }
  render () {
    return this.content
  }
  firstUpdated (changedProperties) {
    for (let key of changedProperties.keys()) {
      if (key === 'src') {
        if (this.default) {
          this.fetchMarkdown(this.default).then(result => { this.content = result })
        }
      }
    }
  }
  async fetchMarkdown (mdSource) {
    let result
    let response
    try {
      response = await fetch(mdSource)
      if (response && response.ok) {
        result = await response.text()
      }
    } catch (err) {
      console.log(err)
    }
    return html`<style>
        :host {
          font-family: sans-serif;
        }
        :host div {
          padding-left: 2rem;
        }
      </style>
      <div>
        ${html([markdown(response)])}
      </div>
      `
  }
}

// install
customElements.define('md-view', MdView)
