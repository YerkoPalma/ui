/* global fetch customElements */
import { CustomLexer, Parser, Renderer, md } from '../lib/markdown.js'
import { html } from 'https://unpkg.com/lit-element?module'
import StyledComponent from './styled.js'

export default class MdView extends StyledComponent {
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
    return html`
    <style>
      ${this.customStyle ? this.customStyle : ''}
    </style>
    ${this.content}`
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
      <div class="md-view-content">
        ${html([md(result)])}
      </div>
      `
  }
}

// install
customElements.define('md-view', MdView)
