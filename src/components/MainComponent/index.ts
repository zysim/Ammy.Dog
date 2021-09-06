import constants from '../../constants'
import { getDefaultCat } from '../../utils/cats'
import debounce from '../../utils/debounce'
import fetchApi from '../../utils/fetchApi'
import { c, e } from '../../utils/jQuery'
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
  _display: IDisplay
  _loadingIcon: HTMLImageElement
  _button: HTMLButtonElement
  _selectedCat: string | null = getDefaultCat()

  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    this._container = c('div')

    this._container.appendChild(c(CatSelectorContainer))

    this._container.addEventListener('initialFetch', e => {
      // @ts-ignore TS doesn't have support for custom events yet
      const { whyDoIHaveToDoThis } = e.detail
      this._selectedCat = whyDoIHaveToDoThis
      this.refresh()
    })

    this._container.addEventListener('catChanged', e => {
      // @ts-ignore TS doesn't have CustomEvent handler support yet
      const { cat } = e.detail
      this._selectedCat = cat.value
      this.saveDefaultCatNameToLocalStorage(cat.innerText)
      this.refresh()
    })

    this._loadingIcon = this._container.appendChild(c('img'))
    this._display = Display(this._container)
    this._button = this._container.appendChild(c('button'))

    this._container.id = 'container'
    this._loadingIcon.id = 'loading-icon'
    this._loadingIcon.src = 'assets/ammy-borking.gif'
    this._button.textContent = 'Get/Refresh'
    this._button.addEventListener('click', debounce(this.refresh))

    const style = c('style')
    style.textContent = STYLE

    shadow.append(style, this._container)
  }

  connectedCallback() {
    if (!this.isConnected) return
    this._selectedCat && this.refresh()
  }

  refresh = async () => {
    if (typeof this._selectedCat !== 'string') {
      this._display.message = 'Something went wrong on our end! Try refreshing.'
      this.hideLoading()
      return
    }
    this.showLoading()
    const res = await this.getWrForCat(this._selectedCat)

    if (!res.ok) {
      if (res.status === 420) {
        this._display.message = "SRC's busy! Retry Later."
      } else {
        this._display.message = 'Failed! Please Retry.'
      }
      this.hideLoading()
      return
    }

    try {
      this.setDisplayTime(await res.json())
      this.hideLoading()
    } catch (e) {
      console.log({ e })
    }
  }

  hideLoading = () => {
    this._loadingIcon.classList.add('hide')
    this.hideLoadingImage()
    this._display.show()
  }

  showLoading = () => {
    this.showLoadingImage()
    this._display.hide()
    this._loadingIcon.classList.remove('hide')
  }

  getWrForCat = async (cat: string) =>
    fetchApi(
      `leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`,
    )

  saveDefaultCatNameToLocalStorage = (catName: string) => {
    localStorage.setItem(constants.DEFAULT_CAT_NAME_KEY, catName)
  }

  setDisplayTime = async (json: RunResponse) => {
    this._display.time = json.data.runs[0].run.times.ingame_t
  }

  // TODO: Doesn't work; event seemingly doesn't dispatch.
  hideLoadingImage = () => {
    this._container.dispatchEvent(e('isLoading', { isLoading: false }))
  }

  // TODO: Ditto.
  showLoadingImage = () => {
    this._container.dispatchEvent(
      e('isLoading', {
        isLoading: true,
      }),
    )
  }
}

export default () => {
  customElements.define('main-component', MainComponent)
}
