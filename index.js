const menu = document.querySelector('body > section:nth-child(2) > nav > div > img');
const sidebar = document.querySelector('.sidebars');
const close = document.querySelector('body > section.sidebars.position-fixed.h-100.w-100 > div > div > img');
const html = document.querySelector('html');

menu.addEventListener('click', function() {
    sidebar.style.visibility = 'visible';
    html.style.overflow = 'hidden';
    close.style.display = 'block';
});

close.addEventListener('click', function() {
    sidebar.style.visibility ='hidden';
    html.style.overflow = 'visible';
    close.style.display = 'none';
});


