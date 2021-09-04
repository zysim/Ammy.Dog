// import registerServiceWorker from './registerServiceWorker.js'
import MainComponent from './components/MainComponent/'
import constants from './constants'
import { $ } from './utils/jQuery'

const getRandomImage = (from: string[]) =>
  `url(assets/${from[~~(Math.random() * from.length)]})`

const currentBackgroundImage = getRandomImage(constants.BACKGROUND_IMAGES)

MainComponent()

const playBackgroundLoadingGif = () => {
  $('body')!.style.backgroundImage = getRandomImage(constants.LOADING_GIFS)
}

const stopBackgroundLoadingGif = () => {
  $('body')!.style.backgroundImage = currentBackgroundImage
}

$('body')!.style.backgroundImage = currentBackgroundImage

$('body')!.addEventListener('isLoading', e => {
  // @ts-ignore TS doesn't have support for custom events yet
  const { isLoading } = e.detail
  if (isLoading) {
    playBackgroundLoadingGif()
  } else {
    stopBackgroundLoadingGif()
  }
})

$('main')!.appendChild(document.createElement('main-component'))

// registerServiceWorker()
