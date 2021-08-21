import { c } from '../../utils/jQuery'
import CatSelector, { OnChange } from './CatSelector'

const TAG = 'cat-selector-container'

export interface ICatSelectorContainer {
  el: HTMLDivElement | null
}

const style = `
#container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

@media (min-width: 800px) {
  #container {
    flex-direction: row;
  }
}
`

const template = `
<div id="container">
  <span>You have to show video proof if your</span>
  <span>run is quicker than or exactly at</span>
</div>
`

const initStyle = () => Object.assign(c('style'), { textContent: style })

const init = () => Object.assign(c('div'), { innerHTML: template }).querySelector('#container') as HTMLDivElement

class CatSelectorContainer extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const container = init()
    container.insertBefore(c(CatSelector), container.lastElementChild)
    shadow.append(initStyle(), container)
  }
}

customElements.define(TAG, CatSelectorContainer)

export default TAG
