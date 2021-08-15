// import registerServiceWorker from './registerServiceWorker.js'
import { $ } from './utils/buildComponents'
import MainComponent from './components/MainComponent/'

const backgroundImages = ['ammy-static', 'bead']

MainComponent()

$('body')!.style.backgroundImage = `url(assets/${
  backgroundImages[~~(Math.random() * backgroundImages.length)]
}.png)`

$('main')!.appendChild(document.createElement('main-component'))
$('#stop-animation')!.addEventListener('click', _ => {
  $('body')!.classList.toggle('no-anim')
})

// registerServiceWorker()
