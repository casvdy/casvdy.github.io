document.addEventListener('DOMContentLoaded', function () {
    // Use try-catch blocks for diff utils so if one fails, the rest of it won't.

    // ADD HEADER
    try {
        const template = document.createElement('template');
        let home = '';
        if (document.location.pathname==='/') {
            home = '';
        }
        else {
            home = '<li class="home-btn"><a href="/">Home</a></li>';
        }

        template.innerHTML = `
    <header class="header">
        <img class="menu-btn" src="/media/menu.svg" onclick="toggleMenu()" data-state="still"/>
        <form class="search">
            <input type="search" placeholder="Search courses, people, etc">
        </form>
        <img src="/assets/student_icon.png" class="student-login-btn"></img>
        <nav class="main-nav" data-shown="hidden">
            <ul class="nav-list">
                ${home}
                <li class="dropdown-parent"><a>About Institution <span class="arrow">▼</span></a>
                    <ul class="dropdown">
                        <li><a href="/overview">Overview</a></li>
                        <li><a href="/history">History</a></li>
                        <li><a href="/vision-mission">Vision & Mission</a></li>
                        <li><a href="/principal-message">Principal's Message</a></li>
                        <li><a href="/accreditation-recognition">Accreditation & Recognition</a></li>
                        <li><a href="/mandatory-disclosures">Mandatory Disclosures</a></li>
                        <li><a href="/assets/documents/annualreport25.pdf"  target="_blank">Annual Report</a></li>
                        <li><a href="/assets/documents/annualaccounts25.pdf"  target="_blank">Annual Accounts</a></li>
                        <li><a href="/sponsoring-bodies">Sponsoring Bodies</a></li>
                    </ul>
                </li>
                <li class="dropdown-parent"><a>Administration <span class="arrow">▼</span></a>
                    <ul class="dropdown">
                        <li><a href="/principal">Principal</a></li>
                        <li><a href="/hods">HoDs</a></li>
                        <li><a href="/faculty">Faculty</a></li>
                        <li><a href="/admin-staff">Administrative Staff</a></li>
                        <li><a href="/supporting-staff">Supporting Staff</a></li>
                    </ul>
                </li>
                <li class="dropdown-parent" ><a>Academics <span class="arrow">▼</span></a>
                    <ul class="dropdown">
                        <li><a href="/programmes">Programmes</a></li>
                        <li><a href="http://docs.uoc.ac.in/website/news/2025-01-21%2010:58:29_new1986.pdf">Academic Calendar</a></li>
                        <li><a href="/departments">Departments</a></li>
                        <li><a href="/iqac">IQAC</a></li>
                        <li><a href="/library">Library</a></li>
                        <li><a href="/academic-collab">Academic Collaborations</a></li>
                    </ul>
                </li>
                <li><a href="http://www.ihrdadmissions.org/">Admissions <span style="font-family: monospace;">&</span> Fee</a></li>
                <li><a href="/research">Research</a></li>
                <li class="dropdown-parent"><a>Student Life <span class="arrow">▼</span></a>
                    <ul class="dropdown">
                        <li><a href="/sports">Sports</a></li>
                        <li><a href="/nss">NSS</a></li>
                        <li><a href="/clubs">Clubs & Cells</a></li>
                        <li><a href="/placement-cell">Placement Cell</a></li>
                        <li><a href="/health">Health Facilities</a></li>
                    </ul>
                </li>
                <li><a href="/alumni">Alumni</a></li>
                <li><a href="/information">Information</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
        `
        document.body.insertBefore(template.content, document.body.firstChild);

    } catch (error) {
        console.error("[HEADER] ", error);
    }

    // ADD FOOTER 
    try {
        const template = document.createElement('template');
        template.innerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p>College of Applied Science Vadakkencherry</p> 
                    <p>Erassankulam PO, NH544, </p>
                    <p>Vadakkencherry, Palakkad, </p>
                    <p>Kerala - 678683</p>
                    <p>+91 8547 005 042</p>
                </div>

                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <a href="https://uoc.ac.in/"><p>University of Calicut</p></a>
                    <a href="https://ihrd.ac.in/"><p>IHRD Official Website</p></a>
                    <a href="https://student.uoc.ac.in/"><p>Student Portal</p></a>
                    <a href="https://nad.digilocker.gov.in/"><p>NAD Registration</p></a>
                </div>

                <div class="footer-section">
                    <h3>Affiliations</h3>
                    <a href="/assets/documents/aicte.pdf"><p>Approved by AICTE</p></a>
                    <a href="/assets/documents/ugc.pdf"><p>Recognized by UGC</p></a>
                    <a href="https://kerala.gov.in"><p>Government of Kerala</p></a>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <span class="year"></span> College of Applied Science Vadakkencherry. All rights reserved.</p>
                <p>Designed & Developed by <a href="/didc">DIDC</a></p>
            </div>
        </footer>
        `
        document.querySelector('.main-content').appendChild(template.content);

    } catch (error) {
        console.error("[FOOTER] ", error);
    }

    // ADD THE YEAR AT FOOTER
    try {
        document.querySelector('.year').innerHTML = (new Date().getFullYear());
    } catch (error) {
        console.error("[YEAR UPDATER] ", error)
    }

    // CONFIGURE DROPDOWN CLICKS
    try {
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
                        console.log('clickity clack');
                        e.preventDefault(); // Only prevent default if not clicking a dropdown link
                        closeAllDropdowns();
                        if (this.classList.contains('active')) {
                            this.classList.remove('active');
                        }
                        else {
                            this.classList.add('active');
                        }
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
    } catch (error) {
        console.log('[DROPDOWN ERROR] ', error)
    }

    // FOR GALLERY ITEMS IN GALLERY PAGE (FOR NOW)
    try {

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
                const src = document.createElement('p', { class: "author" });
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
    } catch (error) {
        console.log('[GALLERY-ITEM] ', error)
    }


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