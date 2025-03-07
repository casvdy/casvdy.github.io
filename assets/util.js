document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.year').innerHTML = (new Date().getFullYear());
    const dropdownParents = document.querySelectorAll('.dropdown-parent');

    function closeAllDropdowns() {
        dropdownParents.forEach(parent => {
            parent.classList.remove('active');
        });
    }

    dropdownParents.forEach(parent => {
        parent.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                // Check if the clicked element is a link inside the dropdown
                if (!e.target.closest('.dropdown a')) {
                    e.preventDefault(); // Only prevent default if not clicking a dropdown link
                    this.classList.toggle('active');
                }
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown-parent')) {
            closeAllDropdowns();
        }
    });

    window.addEventListener('resize', closeAllDropdowns);
});

function toggleMenu() {
    const hamburger = document.querySelector('.menu-btn');
    const menu = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (menu.getAttribute('data-shown') === 'hidden') {
        // Opening animation
        menu.setAttribute('data-shown', 'shown');
        hamburger.classList.add('active');
        hamburger.setAttribute("src", "/media/close.svg");

        // Cascade animation with faster delays
        navLinks.forEach((link, index) => {
            link.style.transitionDelay = `${(index - 1) * 0.03}s`;
        });
    } else {
        // Closing animation
        menu.setAttribute('data-shown', 'hidden');
        hamburger.classList.remove('active');
        hamburger.setAttribute("src", "/media/menu.svg");

        // Reset delays for next opening
        navLinks.forEach(link => {
            link.style.transitionDelay = '0s';
        });
    }
}