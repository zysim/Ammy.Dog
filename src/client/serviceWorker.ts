self.addEventListener('install', () => {
  console.log('Install')
})

self.addEventListener('activate', event => {
  console.log('Activate')
})

self.addEventListener('fetch', event => {
  console.log('Fetch', { event })
})
