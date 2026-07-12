// this function switches between views
function navigateTo(targetViewId) {
    //hide all view sections
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.add('hidden');
    });

    //revelas the targeted view section

    const targetView = document.getElementById(targetViewId);
    if (targetView) {
        targetView.classList.remove('hidden');
    }

}

//service worker registerstation
if ('serviceWorker' in navigator) {
    window.addEventListener( 'load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('PWA service worker registererd:', reg.scope))
        .catch(err => console.error('Service worker failure:', err));

    });
}