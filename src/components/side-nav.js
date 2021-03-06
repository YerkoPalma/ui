/* global customElements HTMLAnchorElement getComputedStyle */
import { html } from 'https://unpkg.com/lit-element?module'
import StyledComponent from './styled.js'

export default class SideNav extends StyledComponent {
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
      ::slotted(*) {
        display: none;
      }
      @media screen and (min-width: 30em) {
        ::slotted(*) {
          display: block;
        }
      }
      ${this.customStyle ? this.customStyle : ''}
    </style>
    <aside class="z-999 helvetica bg-black-90 top-0 fixed h-100 ph3 pv3 pv4-ns ph3-m ph4-l" @click="${this.toggleNav}">
      <nav class="f6 fw6 ttu tracked">
        <slot></slot>
      </nav>
    </aside>
    `
  }
  firstUpdated () {
    let slot = this.shadowRoot.querySelector('slot')
    let anchors = slot.assignedNodes().filter(el => el instanceof HTMLAnchorElement)
    anchors.forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        if (this.isOpen) {
          this.isOpen = false
          slot.assignedNodes().forEach(an => {
            if (an.style) {
              an.dataset.display = getComputedStyle(an).display
              an.style.display = 'none'
            }
          })
        }
      })
    })
  }
  toggleNav (e) {
    e.preventDefault()
    e.stopPropagation()
    let slot = this.shadowRoot.querySelector('slot')
    let anchors = slot.assignedNodes().filter(el => el instanceof HTMLAnchorElement)
    // if links are hidden, show them and grow nav
    if (getComputedStyle(anchors[0]).display === 'none') {
      this.isOpen = true
      slot.assignedNodes().forEach(a => {
        // don't force style so classes still works
        if (a.style) {
          a.style.display = a.dataset.display || 'block'
        }
      })
    }
  }
}

// install
customElements.define('side-nav', SideNav)
