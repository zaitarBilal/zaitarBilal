window.addEventListener('scroll', function(){
    var nav = document.querySelector('.navbar');
    nav.classList.toggle('fixeNavbar', window.scrollY > 0);
});


