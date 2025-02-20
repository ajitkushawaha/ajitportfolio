self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("pwa-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/assets/images/logosvg.png",
          "/assets/images/logoica.png",
          "/manifest.json",
          "/assets/css/styles.css",
          "/assets/js/script.js",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  