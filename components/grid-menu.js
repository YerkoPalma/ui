import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element?module'

export default class GridMenu extends LitElement {
  static get properties () {
    return {
      random: {
        type: Boolean
      },
      ready: {
        type: Boolean
      }
    }
  }
  constructor () {
    super()
    // load dependency
    this.ready = false
    this.loadScript('https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js', () => {
      this.ready = true
    })
  }
  render () {
    return this.ready ? html`` : html``
  }

  loadScript (src, done) {
    var js = document.createElement('script')
    js.src = src
    js.onload = () => {
      done()
    }
    js.onerror = () => {
      done(new Error('Failed to load script ' + src))
    }
    document.head.appendChild(js)
  }
}

// install
customElements.define('grid-menu', GridMenu)
