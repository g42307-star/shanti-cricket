// Minimal service worker: lets the phone install the app. It caches nothing, so updates always show instantly.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
