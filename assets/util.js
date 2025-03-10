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


    let items = document.querySelectorAll('.gallery-item');

    items.forEach((item) => {
        item.addEventListener('click', (e) => {
            // Create modal elements
            const modal = document.createElement('div');
            modal.className = 'gallery-modal active';
            document.body.classList.add('modal-open');

            const content = document.createElement('div');
            content.className = 'gallery-modal-content';

            const img = new Image();
            const src = document.createElement('p', {class: "author"});
            src.textContent = item.querySelector('img').getAttribute('data-src');
            img.className = 'gallery-modal-img';
            img.src = item.querySelector('img').src;
            img.alt = item.querySelector('img').alt;


            // Build modal structure
            content.appendChild(src);
            content.appendChild(img);
            modal.appendChild(content);
            document.body.appendChild(modal);

            // Close modal on click
            modal.addEventListener('click', (e) => {
                if (modal === e.target) {
                    document.body.classList.remove('modal-open');
                    modal.remove();
                }
            });

            // Close on ESC key
            document.addEventListener('keydown', function escClose(e) {
                if (e.key === 'Escape') {
                    document.body.classList.remove('modal-open');
                    modal.remove();
                    document.removeEventListener('keydown', escClose);
                }
            });
        });
    });
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