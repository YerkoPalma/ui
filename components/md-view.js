/* global fetch customElements */
import { CustomLexer, Parser, Renderer } from '../lib/markdown.js'
import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element?module'

let md

export default class MdView extends LitElement {
  static get properties () {
    return {
      src: {
        type: String
      },
      content: {
        type: Object
      },
      customElements: {
        type: String
      }
    }
  }
  constructor () {
    super()
    for (let attribute of Array.from(this.attributes)) {
      if (attribute.name === 'custom-elements') {
        const lexer = new CustomLexer(attribute.value)
        const defaults = {
          gfm: true,
          tables: true,
          taskLists: true,
          dataLine: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          sanitizer: null,
          mangle: true,
          smartLists: false,
          silent: false,
          highlight: null,
          langPrefix: 'lang-',
          smartypants: false,
          headerPrefix: '',
          renderer: new Renderer(),
          xhtml: false
        }
        md = (src) => Parser.parse(lexer.lex(src, defaults), defaults)
      }
    }

    this.content = html([md(this.innerHTML)])
  }
  render () {
    return this.content
  }
  firstUpdated (changedProperties) {
    for (let key of changedProperties.keys()) {
      if (key === 'src') {
        if (this.src) {
          this.fetchMarkdown(this.src).then(result => { this.content = result })
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
        ${html([md(result)])}
      </div>
      `
  }
}

// install
customElements.define('md-view', MdView)
