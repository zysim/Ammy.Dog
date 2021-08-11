import CatSelector, { CatEntry, ICatSelector } from './CatSelector'
import Display, { IDisplay } from './Display'

interface RunResponse {
  data: {
    runs: {
      run: {
        times: {
          ingame_t: number
        }
      }
    }[]
  }
}

const STYLE = `
.container {
    display: grid;
    grid-template-columns: 1fr;
}

.container * {
  font-size: 24px;
  font-family: "astralsOkami", serif;
}

#cat-select > option {
  font-family: "astralsOkami", serif;
  font-size: 16px;
}

#display {
  text-align: center;
  font-size: 2.5rem;
  height: 2.5rem;
}

#title {
  text-align: center;
}

@media (min-width: 640px) {
  #display {
    font-size: 6rem;
    height: 6rem;
  }
}
`

class MyComponent extends HTMLElement {
  _container: HTMLDivElement
  _title: HTMLSpanElement
  _display: IDisplay
  _button: HTMLButtonElement
  _catSelector: ICatSelector
  _selectedCat!: CatEntry

  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    this._container = document.createElement('div')
    this._title = this._container.appendChild(document.createElement('span'))
    this._display = Display(this._container)
    this._button = this._container.appendChild(document.createElement('button'))
    this._catSelector = CatSelector(this._container, (value: CatEntry) => {
      this._selectedCat !== value && this.refresh(value)
      this._selectedCat = value
    })

    this._container.className = 'container'
    this._title.id = 'title'
    this._title.textContent =
      'You have to show video proof if your run is quicker than or exactly at'
    this._button.textContent = 'Refresh'
    this._button.addEventListener('click', () => this.refresh())

    const style = document.createElement('style')
    style.textContent = STYLE

    shadow.append(style, this._container)
  }

  refresh = async (value: CatEntry = this._catSelector.current) => {
    this._display.message = 'Getting times...'
    const res = await this.getRunsForCat(value)

    if (!res.ok) {
      this._display.message = 'Failed! Please Retry.'
      return
    }

    try {
      this._display.time = (await res.json()).data.runs[0].run.times.ingame_t
    } catch (e) {
      console.log({ e })
    }
  }

  getRunsForCat = async (cat: CatEntry) =>
    fetch(
      `https://www.speedrun.com/api/v1/leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`,
      {
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
        },
      },
    )
}

export default () => {
  customElements.define('my-component', MyComponent)
}
