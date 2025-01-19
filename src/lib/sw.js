
function registerServiceWorker(){
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.debug('[sw]: registered with scope:', registration.scope);
    }).catch((error) => {
      console.error('[sw]: registration failed:', error);
    });
  } else {
    console.warn('[sw]: not supported in this browser.');
  }
}

function unregisterServiceWorker () {
  navigator.serviceWorker.getRegistrations().then(registrations => {
      for (const registration of registrations) {
          registration.unregister();
      }
  });
}

function clearCache (){
  if ('caches' in window) {
    caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
            console.debug(`Deleting cache: ${cacheName}`);
            caches.delete(cacheName); // Delete each cache
        });
    });
  }
}

registerServiceWorker()
addEventListener('DOMContentLoaded', () => {
  document.querySelector('[href="#clean"]').addEventListener('click', () => {
    clearCache()
    unregisterServiceWorker()
  })
})
