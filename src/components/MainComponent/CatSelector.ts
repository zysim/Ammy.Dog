import fetchApi from '../../utils/fetchApi'
import { compose } from '../../utils/fp'
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

const FALLBACK: CatEntries = {
  'NG Any%': 'zdnwp4xd',
  'NG+ Any%': 'xk901ggk',
  'NG All Brushes': 'q25owqgk',
  'NG+ All Brushes': 'z27gy6o2',
  'Top Dog': 'mkeozqxd',
  'All Major Bosses': '9d831962',
}

const DEFAULT_ENTRY: string = 'xk901ggk' // NG+ Any%

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
<option ${entry[1] === DEFAULT_ENTRY && 'selected'} class="cat-option" value=${
  entry[1]
}>
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
        (acc, { id, name }) => ({ ...acc, [name]: id }),
        {},
      )
    : null

const writeCatsToLocalAndReturn = async (
  cats: Promise<CatEntries | null>,
): Promise<CatEntries> => {
  localStorage.setItem('cats', JSON.stringify((await cats) ?? FALLBACK))
  return (await cats) ?? FALLBACK
}

class CatSelector extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const container = init()

    const select = container.querySelector('select') as HTMLSelectElement

    this.buildSelect(this.getCats(), select)

    select.addEventListener('change', e => {
      select.dispatchEvent(
        new CustomEvent('catChanged', {
          bubbles: true,
          detail: { text: () => select.value },
        }),
      )
    })

    shadow.append(initStyle(), container)
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
    writeCatsToLocalAndReturn,
  )
}

customElements.define(TAG, CatSelector)

export default TAG
