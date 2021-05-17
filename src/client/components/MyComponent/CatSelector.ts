import { Component } from '../../interfaces'

export enum CatEntry {
  NG_Any = 'zdnwp4xd',
  NG_Any1 = 'xk901ggk',
  NG_All_Brushes = 'q25owqgk',
  NG_All_Brushes1 = 'z27gy6o2',
  Top_Dog = 'mkeozqxd',
  All_Major_Bosses = '9d831962',
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
      const opt = r.el.appendChild(document.createElement('option'))
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
