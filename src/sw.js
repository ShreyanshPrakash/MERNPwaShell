const cacheName = 'v1';

const static = [
    './',
    './index.html'
];

self.addEventListener('install', async event => {

    const cache = await cache.open( cacheName );
    await cache.addAll( static );
    return self.skipWaiting();
})


self.addEventListener('activate', (e) =>{
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName) { 
            return caches.delete(cache);
          }
        })
      )
    })
  )
});
self.addEventListener('fetch', e => { 
  e.respondWith(
      fetch(e.request)
        .then(res => {
            const resClone = res.clone();
            caches
                .open(cacheName)
                .then(cache => {
                    cache.put(e.request, resClone);
                }); 
                return res;
        }).catch(err => caches.match(e.request).then(res => res))
  );
});