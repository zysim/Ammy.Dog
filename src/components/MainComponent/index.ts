import debounce from '../../utils/debounce'
import fetchApi from '../../utils/fetchApi'
import { compose } from '../../utils/fp'
import CatSelectorContainer from './CatSelectorContainer'
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
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#container {
  display: flex;
  border: solid 18px hsl(0, 0%, 12%);
  flex-flow: column nowrap;
  align-items: center;
  padding: 24px;
  background-color: hsla(0, 0%, 100%, 97%);
}

button, select {
  font-size: 24px;
  font-family: "astralsOkami", sans-serif;
}

.hide {
  display: none;
}

#loading-icon {
  height: 2.5rem;
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
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
  #container {
    border: solid 24px hsl(0, 0%, 12%);
    padding: 48px;
  }

  #display {
    font-size: 6rem;
    height: 6rem;
  }
}
`

class MainComponent extends HTMLElement {
  _container: HTMLDivElement
  //_catSelectorContainer: ICatSelectorContainer
  _display: IDisplay
  _loadingIcon: HTMLImageElement
  _button: HTMLButtonElement
  // _selectedCat = CatEntry['NG+ Any%']

  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    this._container = document.createElement('div')
    this._container.appendChild(document.createElement(CatSelectorContainer))
    //this._catSelectorContainer = CatSelectorContainer(
    //  this._container,
    //  (value: CatEntry) => {
    //    this._selectedCat !== value && debounce(() => this.refresh(value))()
    //    this._selectedCat = value
    //  },
    //)
    this._loadingIcon = this._container.appendChild(
      document.createElement('img')
    )
    this._display = Display(this._container)
    this._button = this._container.appendChild(document.createElement('button'))

    this._container.id = 'container'
    this._loadingIcon.id = 'loading-icon'
    this._loadingIcon.src = 'assets/ammy-borking.gif'
    this._button.textContent = 'Get/Refresh'
    // this._button.addEventListener('click', debounce(this.refresh))

    const style = document.createElement('style')
    style.textContent = STYLE

    shadow.append(style, this._container)
  }

  connectedCallback() {
    if (!this.isConnected) return

    this._container.addEventListener('catChanged', e => {
      // @ts-ignore Don't have a CustomEvent handler yet
      console.log(e.detail.text())
    })
  }

  getLocalCats = () => {
    const cats = localStorage.getItem('cats')
    return cats ? JSON.parse(cats) : null
  }


  refresh = async (value: 'test') => {
    this._display.hide()
    this._loadingIcon.classList.remove('hide')
    const res = await this.getRunsForCat(value)
    this._loadingIcon.classList.add('hide')
    this._display.show()

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

  getRunsForCat = async (cat: string) =>
    fetchApi(
      `leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`
    )
}

export default () => {
  customElements.define('main-component', MainComponent)
}
