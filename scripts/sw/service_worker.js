// Register service worker? Perhaps it is enough to make an empty registration?
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('http://localhost/scripts/kimarokko.com/fysio/fysio17/sw_cashed_pages.js')
        .then(reg => console.log('Service Worker: Registered (Pages)'))
        .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
  }





