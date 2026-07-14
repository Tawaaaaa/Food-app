const CACHE_NAME = 'food-app-v1';
const ASSETS = [
    '/',
    '/index.html', 
    '/style.css',
    '/app.js',
    '/manifest.json',
    '/images/pancakes.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))

    );

});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(repsonse => response || fetch(event.request))

    );
});
