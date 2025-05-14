const cacheName = "busy-thermometer-v1";
const assets = [
  "index.html",
  "styles.css",
  "script.js",
  "manifest.json",
  "icons/192.png",
  "icons/512.png",
  "bell.mp3",
  "click.mp3"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
