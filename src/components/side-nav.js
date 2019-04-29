/* global customElements fetch */
import { LitElement, html } from 'https://unpkg.com/lit-element?module'

export default class SideNav extends LitElement {
  static get properties () {
    return {
      customStyle: {
        type: String
      }
    }
  }
  constructor () {
    super()
    // fetch default content
    for (let attribute of Array.from(this.attributes)) {
      if (attribute.name === 'custom-style' && attribute.value.split('.').slice(-1)[0] === 'css') {
        fetch(attribute.value)
          .then(response => response.text())
          .then(text => { this.customStyle = text })
      }
    }
  }
  render () {
    return html`
    <style>
      :host {
        display: block
      }
      :host([hidden]) {
        display: none;
      }
      :host aside {
        z-index: 999;
        position: fixed;
        top: 0;
        height: 100vh;
      }
      ::slotted(a) {
        display: none;
      }
      @media screen and (min-width: 30em) {
        ::slotted(a) {
          display: block;
        }
      }
      ${this.customStyle ? this.customStyle : ''}
    </style>
    <aside class="z-999 helvetica bg-black-90 top-0 fixed h-100 ph3 pv3 pv4-ns ph3-m ph4-l">
      <nav class="f6 fw6 ttu tracked">
        <slot></slot>
      </nav>
    </aside>
    `
  }
}

// install
customElements.define('side-nav', SideNav)
