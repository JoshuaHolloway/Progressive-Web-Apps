// Progressive Enhancement (SW supported)
//if ('serviceWorker' in navigator)
if (navigator.serviceWorker) {

    // Retister the SW
    navigator.serviceWorker.register('/sw.js')
        .then(function (retistration) {
            console.log('SW Registered');
        }).catch(console.log);

    // The register method returns a Promise
}