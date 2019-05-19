/* global fetch */
import { LitElement } from 'https://unpkg.com/lit-element?module'

// export
export default class StyledComponent extends LitElement {
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
}
