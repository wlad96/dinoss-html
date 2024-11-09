const navLinks = document.querySelectorAll('.nav__linkWrap-sub');
const page = document.querySelector('.page');

navLinks.forEach(navLink => {
    navLink.addEventListener('mouseover', () => {
        page.classList.add('overlay');
    });

    navLink.addEventListener('mouseout', () => {
        page.classList.remove('overlay');
    });
});

const topNavLinks = document.querySelectorAll('.headerTop__menu-sub');

topNavLinks.forEach(topNavLink => {
    topNavLink.addEventListener('mouseover', () => {
        page.classList.add('overlay2');
    });

    topNavLink.addEventListener('mouseout', () => {
        page.classList.remove('overlay2');
    });
});

$(document).ready(function () {
    $('.filterCollapse__header').click(function () {
        $(this).closest('.filter__collapse').toggleClass('active');
    });

    $('.filters__btn').click(function () {
        $(`.page`).addClass("overlay3");
        $(this).closest('.filtersBlock').toggleClass('active');
    });
});

