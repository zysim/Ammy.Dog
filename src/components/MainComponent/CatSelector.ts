import constants from '../../constants'
import { createCustomEvent } from '../../utils'
import { getDefaultCat } from '../../utils/cats'
import fetchApi from '../../utils/fetchApi'
import { compose, curry } from '../../utils/fp'
import { c } from '../../utils/jQuery'

export type CatEntries = {
  [name: string]: string
}

interface CatResponse {
  data: {
    id: string
    name: string
  }[]
}

export type OnChange = (value: string) => void

export interface ICatSelector {
  el: HTMLSelectElement
  current: string
}

const TAG = 'cat-selector'

const style = `
#container {
  padding: 0rem .5rem;
}

select {
  font-family: "astralsOkami";
  font-size: 1rem;
}

.cat-option {
  font-family: "astralsOkami", sans-serif;
  font-size: 16px;
}
`

const template = `
<div id="container">
  <select></select>
</div>
`

const optionTemplate = (entry: [string, string]) => `
<option ${
  entry[1] === getDefaultCat() && 'selected'
} class="cat-option" value=${entry[1]}>
${entry[0]}
</option>
`

const initStyle = () => Object.assign(c('style'), { textContent: style })

const init = () =>
  Object.assign(c('div'), { innerHTML: template }).querySelector(
    '#container',
  ) as HTMLDivElement

const fetchCats = async (): Promise<CatResponse | null> => {
  const res = await fetchApi('games/w6j7546j/categories')
  if (!res.ok) {
    console.table({ status: res.status, statusText: res.statusText })
    return null
  }
  return res.json()
}

const parseCatApiJson = async (
  json: Promise<CatResponse | null>,
): Promise<CatEntries | null> =>
  (await json)
    ? ((await json) as CatResponse).data.reduce(
        (acc, { id, name }) =>
          name.startsWith('(Legacy)') ? acc : { ...acc, [name]: id },
        {},
      )
    : null

const writeCatsToLocalStorage = async (
  cats: Promise<CatEntries | null>,
): Promise<CatEntries> => {
  try {
    localStorage.setItem(
      'cats',
      JSON.stringify((await cats) ?? constants.FALLBACK),
    )
    localStorage.setItem(
      constants.DEFAULT_CAT_NAME_KEY,
      constants.DEFAULT_CAT_NAME,
    )
  } catch (e) {
    // It's most likely a QuotaExceededError. Just log the error just in case and ignore
    console.error(e)
  }
  return (await cats) ?? constants.FALLBACK
}

const triggerFetch = async (el: CatSelector, cats: Promise<CatEntries>) => {
  el.dispatchEvent(
    createCustomEvent('triggerFetch', {
      whyDoIHaveToDoThis: (await cats)[constants.DEFAULT_CAT_NAME],
    }),
  )
  return cats
}

class CatSelector extends HTMLElement {
  _select: HTMLSelectElement

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const container = init()

    this._select = container.querySelector('select') as HTMLSelectElement

    this._select.addEventListener('change', _ => {
      this._select.dispatchEvent(
        createCustomEvent('catChanged', {
          cat: this._select.options.item(this._select.selectedIndex),
        }),
      )
    })

    shadow.append(initStyle(), container)
  }

  connectedCallback() {
    this.buildSelect(this.getCats(), this._select)
  }

  buildSelect = (
    cats: CatEntries | Promise<CatEntries>,
    el: HTMLSelectElement,
  ) => {
    if (!(cats instanceof Promise)) {
      el.innerHTML = Object.entries(cats).map(optionTemplate).join('\n')
    } else {
      cats.then(c => this.buildSelect(c, el))
    }
  }

  getCats = (): CatEntries | Promise<CatEntries> =>
    localStorage.getItem('cats')
      ? JSON.parse(localStorage.getItem('cats') as string)
      : this.fetchCatsAndParseJson()

  fetchCatsAndParseJson: () => Promise<CatEntries> = compose(
    fetchCats,
    parseCatApiJson,
    writeCatsToLocalStorage,
    curry(triggerFetch, this),
  )
}

customElements.define(TAG, CatSelector)

export default TAG
