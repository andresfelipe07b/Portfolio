const hamburger = document.querySelector('.hamburger');
const navbarOptions = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarOptions.classList.toggle('active');
    document.body.classList.toggle('menu-open');

});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarOptions.classList.remove('active');
        document.body.classList.remove('menu-open');

    });
});
