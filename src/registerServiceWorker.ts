// To know how to enable a site to use service workers; read the accepted answer, and then specifically the answer linked:
// https://stackoverflow.com/questions/49539306/firefox-service-worker-securityerror-domexception-the-operation-is-insecure/63135387#63135387

export default () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('serviceWorker.js')
        .then(
          function (registration) {
            // Registration was successful
            console.log('Registered!')
          },
          function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err)
          },
        )
        .catch(function (err) {
          console.log(err)
        })
    })
  } else {
    console.log('service worker is not supported')
  }
}
