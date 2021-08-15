import debounce from '../../utils/debounce'
import { CatEntry } from './CatSelector'
import CatSelectorContainer, {
  ICatSelectorContainer,
} from './CatSelectorContainer'
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
#container {
    display: flex;
    border: solid 24px hsl(0, 0%, 12%);
    flex-flow: column nowrap;
    align-items: center;
    padding: 48px;
    background-color: hsla(0, 0%, 100%, 97%);
}

button, select {
  font-size: 24px;
  font-family: "astralsOkami", serif;
}

#cat-selector-container {
  display: flex;
  flex-flow: column nowrap;
}

#cat-select {
  padding: 0rem .5rem;
}

.cat-option {
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

@media (min-width: 800px) {
  #cat-selector-container {
    flex-flow: row nowrap;
  }

  #display {
    font-size: 6rem;
    height: 6rem;
  }
}
`

class MainComponent extends HTMLElement {
  _container: HTMLDivElement
  _catSelectorContainer: ICatSelectorContainer
  _display: IDisplay
  _button: HTMLButtonElement
  _selectedCat = CatEntry['NG+ Any%']

  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    this._container = document.createElement('div')
    this._catSelectorContainer = CatSelectorContainer(
      this._container,
      (value: CatEntry) => {
        this._selectedCat !== value && debounce(() => this.refresh(value))()
        this._selectedCat = value
      },
    )
    this._display = Display(this._container)
    this._button = this._container.appendChild(document.createElement('button'))

    this._container.id = 'container'
    this._button.textContent = 'Get/Refresh'
    this._button.addEventListener('click', debounce(this.refresh))

    const style = document.createElement('style')
    style.textContent = STYLE

    shadow.append(style, this._container)
  }

  connectedCallback() {
    this.isConnected && this.refresh()
  }

  refresh = async (value: CatEntry = this._selectedCat) => {
    this._display.message = 'Getting times...'
    const res = await this.getRunsForCat(value)

    if (!res.ok) {
      if (res.status === 420) {
        this._display.message = "SRC's busy! Retry Later."
      } else {
        this._display.message = 'Failed! Please Retry.'
      }
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
  customElements.define('main-component', MainComponent)
}
