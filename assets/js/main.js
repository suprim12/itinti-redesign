function fixnav() {
    let nav = document.querySelector('.navbar-custom');
    let topnav = nav.offsetTop;
    if (window.scrollY > topnav) {
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
    } else {
        // document.body.style.paddingTop = 0 + 'px';
        document.body.classList.remove("fixed-nav");
    }
}
window.addEventListener('scroll', fixnav);