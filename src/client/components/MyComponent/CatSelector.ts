import { Component } from '../../interfaces'

export enum CatEntry {
  'NG Any%' = 'zdnwp4xd',
  'NG+ Any%' = 'xk901ggk',
  'NG All Brushes' = 'q25owqgk',
  'NG+ All Brushes1' = 'z27gy6o2',
  'Top Dog' = 'mkeozqxd',
  'All Major Bosses' = '9d831962',
}

export interface ICatSelector
  extends Component<{ onChange: (value: keyof typeof CatEntry) => void }> {
  el: HTMLSelectElement | null
}

const CatSelector: ICatSelector = {
  init(parent, opts) {
    const r = Object.create(this)
    r.el = parent.appendChild(document.createElement('select'))

    Object.entries(CatEntry).forEach((entry: [string, CatEntry]) => {
      const opt: HTMLOptionElement = r.el.appendChild(
        document.createElement('option'),
      )
      if (entry[0] === 'NG+ Any%') opt.selected = true
      opt.textContent = entry[0]
      opt.value = entry[1]
    })

    r.el.addEventListener('change', () => {
      opts && opts.onChange(r.el.value)
    })

    return r
  },

  el: null,
}

export default CatSelector
