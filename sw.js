self.addEventListener('fetch', function(event) {
    // Kurulum butonunun çıkması için bu boş tetikleyici modern tarayıcılarda zorunludur.
    event.respondWith(fetch(event.request).catch(function() { return new Response("Çevrimdışı mod"); }));
});
