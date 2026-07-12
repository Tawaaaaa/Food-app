//Randomheading

const sentences = [
    "Hi retard where you at?",
    "You're not fat you're just retarded",
    "Where you at lesbian?",
    "Juno says hi",
    "I miss your mom",
    "Yo this our year fo sure"
];

window.addEventListener('DOMContentLoaded', () => {
    //picks random index from array
    const randomIndex = Math.floor(Math.random() * sentences.length);

    //find the heading element by the id
    const heading = document.getElementById('random-main');
    
    //updates the text
    if(heading){
        heading.textContent = sentences [randomIndex];
    }
});



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



