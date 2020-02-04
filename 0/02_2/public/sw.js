console.log('SW: Registered (sw.js)');

self.addEventListener('install', (e) => {
    console.log('SW: Install Event');
});

self.addEventListener('activate', (e) => {
    console.log('SW: Activate Event');
});