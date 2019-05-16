/* global customElements */
import { LitElement, html, css } from 'https://unpkg.com/lit-element?module'
import ongroupload from '../lib/on-group-load.js'

export default class PacmanLoader extends LitElement {
  static get properties () {
    return {
      waitFor: {
        type: String
      }
    }
  }
  static get styles () {
    return css`
    :host {
      font-family: "proxima-nova", sans-serif;
      background: #ed5565;
      color: #fff;
      margin: 0;
      min-height: 100%;
      padding: 0;
      width: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    :host {
      display: table;
      height: 100vh;
    }
    :host .loader {
      display: table-cell;
      vertical-align: middle;
    }
    @keyframes opacityIn {
      0% {
        opactity: 0;
      }
      100% {
        opactity: 1;
      }
    }
    :host .pacman {
      position: relative;
      width: 0;
      margin: 0 auto;
    }
    :host .pacman > div:first-of-type,
    :host .pacman > div:nth-child(2) {
      width:0;
      height:0;
      border-right:25px solid transparent;
      border-top:25px solid #fff;
      border-left:25px solid #fff;
      border-bottom:25px solid #fff;
      border-radius:25px;
      position:relative;
      left:-30px
    }
    @-webkit-keyframes rotate_pacman_half_up {
      0%,100% {
        -webkit-transform:rotate(270deg);
        transform:rotate(270deg)
      }
      50% {
        -webkit-transform:rotate(360deg);
        transform:rotate(360deg)
      }
    }
    @keyframes rotate_pacman_half_up {
      0%,100% {
        -webkit-transform:rotate(270deg);
        transform:rotate(270deg)
      }
      50% {
        -webkit-transform:rotate(360deg);
        transform:rotate(360deg)
      }
    }
    @-webkit-keyframes rotate_pacman_half_down {
      0%,100% {
        -webkit-transform:rotate(90deg);
        transform:rotate(90deg)
      }
      50% {
        -webkit-transform:rotate(0);
        transform:rotate(0)
      }
    }
    @keyframes rotate_pacman_half_down {
      0%,100% {
        -webkit-transform:rotate(90deg);
        transform:rotate(90deg)
      }
      50% {
        -webkit-transform:rotate(0);
        transform:rotate(0)
      }
    }
    @-webkit-keyframes pacman-balls {
      75% {
        opacity:.7
      }
      100% {
        -webkit-transform:translate(-100px,-6.25px);
        transform:translate(-100px,-6.25px)
      }
    }
    @keyframes pacman-balls {
      75% {
        opacity:.7
      }
      100% {
        -webkit-transform:translate(-100px,-6.25px);
        transform:translate(-100px,-6.25px)
      }
    }
    :host .pacman {
      position:relative
    }
    :host .pacman > div:nth-child(3) {
      -webkit-animation:pacman-balls 1s -.66s infinite linear;
      animation:pacman-balls 1s -.66s infinite linear
    }
    :host .pacman > div:nth-child(4) {
      -webkit-animation:pacman-balls 1s -.33s infinite linear;
      animation:pacman-balls 1s -.33s infinite linear
    }
    :host .pacman > div:nth-child(5) {
      -webkit-animation:pacman-balls 1s 0s infinite linear;
      animation:pacman-balls 1s 0s infinite linear
    }
    :host .pacman > div:first-of-type {
      -webkit-animation:rotate_pacman_half_up .5s 0s infinite;
      animation:rotate_pacman_half_up .5s 0s infinite
    }
    :host .pacman > div:nth-child(2) {
      -webkit-animation:rotate_pacman_half_down .5s 0s infinite;
      animation:rotate_pacman_half_down .5s 0s infinite;
      margin-top:-50px
    }
    :host .pacman > div:nth-child(3),
    :host .pacman > div:nth-child(4),
    :host .pacman > div:nth-child(5),
    :host .pacman > div:nth-child(6) {
      background-color:#fff;
      border-radius:100%;
      margin:2px;
      width:10px;
      height:10px;
      position:absolute;
      -webkit-transform:translate(0,-6.25px);
      transform:translate(0,-6.25px);
      top:25px;
      left:70px
    }
    `
  }
  constructor () {
    super()
    for (let attribute of Array.from(this.attributes)) {
      if (attribute.name === 'wait-for') {
        let nodes = attribute.value.split(',').map(selector => document.querySelector(selector))
        nodes.forEach(node => {
          node.style.display = 'none'
        })
        ongroupload(nodes, () => {
          nodes.forEach(node => {
            node.style.display = 'block'
          })
          this.remove()
        })
      }
    }
  }
  render () {
    return html`
    <div class="loader">
      <div class="pacman">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>`
  }
}

// install
customElements.define('pacman-loader', PacmanLoader)
