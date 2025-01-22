const cacheName = 'v3.1.3';
const cacheAllowlist = ["v3.1.3"];
const contentToCache = [
  '/index.html',
  '/1990/index.html',
  '/1990/desktop/index.html',
  '/1990/mobile/index.html',
  '/next/index.html',
];

oninstall = (event) => {
  console.debug('[sw]: Install');

  event.waitUntil(
    (async function () {
      const cache = await caches.open(cacheName);
      console.debug('[sw]: Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })(),
  );
};

onconnect = (event) => {
  console.debug('[sw]: Install');

  event.waitUntil(
    (async function () {
      const cache = await caches.open(cacheName);
      console.debug('[sw]: Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })(),
  );
};

onactivate = () => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheAllowlist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
};

onfetch = (event) => {
  event.respondWith(
    (async function () {
      const isCacheable = /^http/.test(event.request.url)
      const requestHeaders = new Headers(event.request.headers);
      let cachedResponse,isCacheValid = true;
      if (isCacheable) {
        console.debug(`[sw]: Getting "${event.request.url}" from cache`);
        cachedResponse = await caches.match(event.request, { ignoreSearch: true });
        if (cachedResponse) {
          const lastModified = cachedResponse.headers.get('Last-Modified');
          if (lastModified) {
            requestHeaders.set('If-Modified-Since', lastModified);
          }

          const etag = cachedResponse.headers.get('ETag');
          if (etag) {
            requestHeaders.set('If-None-Match', etag);
          }

          // isCacheValid = (lastModified && lastModified === requestHeaders.get('Last-Modified')) || (etag && etag === requestHeaders.get('ETag'))
          // if (isCacheValid) {
            self.clients.matchAll().then((clients) => {
              clients.forEach(client => {
                client.postMessage({
                    type: 'PAGE_CACHED',
                    url: event.request.url
                });
              });
            });

            return cachedResponse;
          // }
        }
      }

      // if (!isCacheValid) {
      //   await caches.keys().then((cacheNames) => {
      //     cacheNames.forEach((cacheName) => {
      //         console.debug(`Deleting cache: ${cacheName}`);
      //         caches.delete(cacheName); // Delete each cache
      //     });
      //   });
      //   requestHeaders.set('cache', 'no-store');
      // }

      let networkResponse = await fetch(event.request, { headers: requestHeaders });

      if (isCacheable && networkResponse.status === 200) {
        const featuredResponse = networkResponse.clone()
        caches.open(cacheName).then((cache) => {
          console.debug(`[sw]: Caching new resource: ${event.request.url}`);
          cache.put(event.request, featuredResponse);
        })
      }

      if (networkResponse.status === 304) {
        console.debug('[sw]: Resource not modified, using cached version');
        networkResponse = new Response('', {
          status: 304,
          statusText: 'Not Modified',
          headers: networkResponse.headers
        });
        return networkResponse;
      }

      return networkResponse;
    })(),
  );
};
