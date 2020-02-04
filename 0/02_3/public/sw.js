console.log('SW: Registered (sw.js)');

self.addEventListener('install', (e) => {

    console.log('SW: Install Event');

    let installPromise = new Promise((resolve) => {
        const ms = 3e3;

        // Some async tasks
        setTimeout(resolve, ms);
    });

    // Tasks for the install event
    e.waitUntil(installPromise);
});

self.addEventListener('activate', (e) => {
    console.log('SW: Activate Event');
});