document.querySelector('#menu-icon').addEventListener('click', (e) => {
    const menu = document.querySelector('#menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

//detect window resizing within
window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 797) {
        const menu = document.querySelector('#menu');
        menu.style.display = '';
    }
});
