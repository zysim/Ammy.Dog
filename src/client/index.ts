// import registerServiceWorker from './registerServiceWorker.js'
import { $ } from './utils/buildComponents'
import MyComponent from './components/MyComponent/'

MyComponent()

$('main').appendChild(document.createElement('my-component'))
$('#stop-animation').addEventListener('click', _ => {
  $('body').classList.toggle('no-anim')
})

const main = async () => {
  document.querySelector('#loader-container')?.remove()
}

// registerServiceWorker()
// main()
