// import registerServiceWorker from './registerServiceWorker.js'
import { $ } from './utils/buildComponents'
import MainComponent from './components/MainComponent/'

const backgroundImages = ['ammy-static', 'bead']

MainComponent()

// @ts-ignore
$('body').style.backgroundImage = `url(assets/${
  backgroundImages[~~(Math.random() * backgroundImages.length)]
}.png)`

$('main').appendChild(document.createElement('main-component'))
$('#stop-animation').addEventListener('click', _ => {
  $('body').classList.toggle('no-anim')
})

const main = async () => {
  document.querySelector('#loader-container')?.remove()
}

// registerServiceWorker()
// main()
