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

class MyComponent extends HTMLElement {
  _container: HTMLDivElement
  _title: HTMLSpanElement
  _subtitle: HTMLSpanElement
  _display: IDisplay
  _button: HTMLButtonElement
  _catSelector: ICatSelector
  _cat: string

  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    this._container = document.createElement('div')
    this._title = document.createElement('span')
    this._subtitle = document.createElement('span')
    this._display = Display.init(this._container)
    this._button = document.createElement('button')
    this._catSelector = CatSelector.init(this._container, {
      onChange: (value: keyof typeof CatEntry) => {
        this._cat = CatEntry[value]
      },
    })
    this._cat = CatEntry.NG_Any1

    this._container.className = 'container'
    this._title.textContent = 'You have to show video proof if'
    this._button.textContent = 'Refresh'
    this._button.addEventListener('click', this.refresh)

    const style = document.createElement('style')
    style.textContent = `
      .container {
          display: grid;
          grid-template-columns: 1fr;
      }
    `

    shadow.append(style, this._container)

    this._container.append(this._title, this._button)
  }

  refresh = async () => {
    this._subtitle.textContent = 'Refreshing'
    const res = await this.getRunsForCat(this._cat)

    if (!res.ok) {
      this._subtitle.textContent = 'Failed! Please Retry.'
      return
    }

    try {
      this._subtitle.textContent = null
      this._display.time = (await res.json()).data.runs[0].run.times.ingame_t
    } catch (e) {
      console.log({ e })
    }
  }

  getRunsForCat = async (cat: string) =>
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
