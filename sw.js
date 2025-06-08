const CACHE_NAME = "arena-pwa-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./gracz.html",
  "./kapitan.html",
  "./kibic.html",
  "./reklama.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
