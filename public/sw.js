const CACHE_NAME = 'astro-ia-v1';
const STATIC_ASSETS = [
    '/',
    '/manifest.json',
    '/icon-192x192.png',
    '/icon-512x512.png',
];

// Install: pre-cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Fetch strategy:
// - API routes → network-first (no cache)
// - Everything else → cache-first with network fallback
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Skip non-GET and API calls (always fresh)
    if (event.request.method !== 'GET' || url.pathname.startsWith('/api/')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return fetch(event.request).then((response) => {
                // Only cache successful same-origin responses
                if (response && response.status === 200 && response.type === 'basic') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                }
                return response;
            });
        })
    );
});
