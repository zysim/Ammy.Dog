// import registerServiceWorker from './registerServiceWorker.js'
import { $ } from './utils/buildComponents'
import MyComponent from './components/MyComponent/'

MyComponent()

$('#root').appendChild(document.createElement('my-component'))

const main = async () => {
  document.querySelector('#loader-container')?.remove()
}

// registerServiceWorker()
// main()
