export enum CatEntry {
  'NG Any%' = 'zdnwp4xd',
  'NG+ Any%' = 'xk901ggk',
  'NG All Brushes' = 'q25owqgk',
  'NG+ All Brushes1' = 'z27gy6o2',
  'Top Dog' = 'mkeozqxd',
  'All Major Bosses' = '9d831962',
}

const DEFAULT_ENTRY: CatEntry = CatEntry['NG+ Any%']

export type OnChange = (value: CatEntry) => void

export interface ICatSelector {
  el: HTMLSelectElement
  current: CatEntry
}

export default (parent: HTMLElement, onChange: OnChange): ICatSelector => {
  const container = parent.appendChild(document.createElement('div'))
  container.id = 'cat-select'
  const el = container.appendChild(document.createElement('select'))

  Object.entries(CatEntry).forEach((entry: [string, CatEntry]) => {
    const opt: HTMLOptionElement = el.appendChild(
      document.createElement('option'),
    )
    if (entry[1] === DEFAULT_ENTRY) opt.selected = true
    opt.className = 'cat-option'
    opt.textContent = entry[0]
    opt.value = entry[1]
  })

  el.addEventListener('change', () => {
    onChange(el.value as CatEntry)
  })

  return {
    el,
    current: el.value as CatEntry,
  }
}
