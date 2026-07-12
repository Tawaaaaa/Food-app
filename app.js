//Randomheading

const sentences = [
    "Hi retard where you at?",
    "You're not fat you're just retarded",
    "Where you at lesbian?",
    "Anna says hi",
    "I miss your mom",
    "Yo this our year fo sure"
];
 //function to change header 
 function randomizeHeading() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const heading = document.getElementById('random-main');
    if (heading) {
        heading.textContent = sentences[randomIndex];
    }
}

//run it once at load
window.addEventListener('DOMContentLoaded', randomizeHeading);

//nav function updated to intercept home returns

function navigateTo(targetViewId){
    //hide all view scetions
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.add('hidden');
    });

    //reveal the targeted view section
    const targetView = document.getElementById(targetViewId);
    if (targetView) {
        targetView.classList.remove('hidden');
    }

    //if user is going back home view, pick new random text
    if (targetViewId ==='home-view') {
        randomizeHeading();
    }
}


// this function switches between views


//service worker registerstation
if ('serviceWorker' in navigator) {
    window.addEventListener( 'load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('PWA service worker registererd:', reg.scope))
        .catch(err => console.error('Service worker failure:', err));

    });
}



