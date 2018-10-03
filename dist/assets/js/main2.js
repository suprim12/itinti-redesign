// FADE
function fadeOut(el) {
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};




function fixnav() {
    let nav = document.querySelector('.navbar-custom');
    let topnav = nav.offsetTop;
    if (window.scrollY > topnav) {
        document.body.classList.add('fixed-nav');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
    } else {
        document.body.classList.remove('fixed-nav');
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
    }
}
window.addEventListener('scroll', fixnav);