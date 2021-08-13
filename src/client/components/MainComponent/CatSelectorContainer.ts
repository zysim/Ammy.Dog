import CatSelector, { OnChange } from './CatSelector'

export interface ICatSelectorContainer {
  el: HTMLDivElement | null
}

export default (
  parent: HTMLElement,
  onChange: OnChange,
): ICatSelectorContainer => {
  const el = parent.appendChild(document.createElement('div'))
  el.id = 'cat-selector-container'
  const title1 = el.appendChild(document.createElement('span'))
  CatSelector(el, onChange)
  const title2 = el.appendChild(document.createElement('span'))
  title1.textContent = 'You have to show video proof if your'
  title2.textContent = 'run is quicker than or exactly at'

  return {
    el,
  }
}
