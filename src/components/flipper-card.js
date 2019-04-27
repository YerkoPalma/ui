/* global customElements */
import { LitElement, html } from 'https://unpkg.com/lit-element?module'

export default class FlipperCard extends LitElement {
  static get properties () {
    return {
      width: {
        type: String
      },
      height: {
        type: String
      }
    }
  }
  render () {
    return html`
      <style>
        .flipper-container {
          perspective: 1000;
          margin: 0 auto;
        }
        .flipper-container:hover .flipper, .flipper-container.hover .flipper {
          transform: rotateY(180deg);
        }
        .flipper-container, .front, .back {
          width: ${this.width || '180px'};
          height: ${this.height || this.width || '180px'};
        }
        .flipper {
          transition: 0.6s;
          transform-style: preserve-3d;

          position: relative;
        }
        .front, .back {
          backface-visibility: hidden;

          position: absolute;
          top: 0;
        }
        .front {
          z-index: 2;
          transform: rotateY(0deg);
        }
        .back {
          transform: rotateY(180deg);
        }
        .flipper-container:hover .flipper, .flipper-container.hover .flipper, .flipper-container.flip .flipper {
          transform: rotateY(180deg);
        }
      </style>
      <div class="flipper-container" @touchstart="${e => this.shadowRoot.querySelector('flipper-container').classList.toggle('hover')}">
        <div class="flipper">
          <div class="front"><slot name="front"></slot></div>
          <div class="back"><slot name="back"></slot></div>
        </div>
      </div>
    `
  }
}

// install
customElements.define('flipper-card', FlipperCard)
