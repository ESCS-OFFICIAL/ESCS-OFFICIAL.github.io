//parallax
const heading = document.querySelector('h1');
setTimeout(function() {
    heading.style.opacity = '1';
    heading.style.transition = '1s';
    heading.style.transform = 'translate(0,15px)';
}, 1000);


//background page 1
const row1 = document.querySelector('.row.pertama');
const row2 = document.querySelector('.row.kedua');
const kolom = document.querySelectorAll('.col');
const bgHead = document.querySelector('.images-1');
const heading6 = document.querySelector('h6');
const html = document.querySelector('html');

setTimeout(function() {
    row1.style.opacity = '1';
    row1.style.transform = 'translate(0,0)';
    row1.style.transition = '0.5s';
},3000);

setTimeout(function() {
    row2.style.opacity = '1';
    row2.style.transform = 'translate(0,0)';
    row2.style.transition = '0.5s';
}, 4000);

setTimeout(function() {
    kolom[0].style.padding = '0';
    kolom[2].style.padding = '0';
    kolom[3].style.padding = '0';
    kolom[5].style.padding = '0';
    kolom[0].style.transition = '0.5s';
    kolom[2].style.transition = '0.5s';
    kolom[3].style.transition = '0.5s';
    kolom[5].style.transition = '0.5s';
}, 5500);

setTimeout(function() {
    kolom[1].style.padding = '0';
    kolom[4].style.padding ='0';
    kolom[1].style.transition = '0.5s';
    kolom[4].style.transition ='0.5s';
    bgHead.style.right = '25vh';
    bgHead.style.transition = '0.5s';
}, 6500);

setTimeout(function() {
    bgHead.style.rowGap = '0';
    bgHead.style.transition = '1s';
    heading.style.opacity = '0';
    heading.style.transition = '1s';
}, 7000);

setTimeout(function() {
    heading.style.opacity = '1';
    heading.style.transform = 'translate(0px, -230px)';
    heading6.style.opacity = '1';
    heading6.style.transform = 'translate(0px, -220px)';
    heading6.style.transition = '0.5s';
    bgHead.style.top = '30vh';
    html.style.overflow = 'visible';
}, 9000);


//parallax jquery
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    console.log(wScroll);

    $('.images-1').css({
        'transform' : 'translate('+ wScroll/6 +'%, 0px)'
    });

    $('.firsth1').css({
        'transform': 'translate('+wScroll/6+'%, -230px)'
    });

    $('.firsth6').css({
        'transform' : 'translate('+wScroll/6+'%, -220px)'
    });

    //par-1
    if (wScroll > 300) {
        $('.par-1').addClass('showing');
    }
});