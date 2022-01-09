require('./bootstrap');


//detect window resizing within
window.addEventListener('resize', () => {

    if (document.documentElement.clientWidth > 797) {

        const menu = document.querySelector('#menu');

        menu.style.display = '';

    }
});
