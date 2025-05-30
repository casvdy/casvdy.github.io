document.addEventListener('DOMContentLoaded', function () {
    // Use try-catch blocks for diff utils so if one fails, the rest of it won't.
    // ADD HEADER
    try {
        const template = document.createElement('template');
        let home = '';
        if (document.location.pathname === '/') {
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
        <svg class="student-login-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

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
                        <li><a href="http://docs.uoc.ac.in/website/news/2025-01-21%2010:58:29_new1986.pdf" target="_blank">Academic Calendar</a></li>
                        <li><a href="/departments">Departments</a></li>
                        <li><a href="/iqac">IQAC</a></li>
                        <li><a href="/library">Library</a></li>
                        <li><a href="/academic-collab">Academic Collaborations</a></li>
                    </ul>
                </li>
                <li><a href="/admissions-fee">Admissions <span style="font-family: monospace;">&</span> Fee</a></li>
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
            const parentLink = parent.querySelector('a');
            parentLink.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault(); // Prevent navigation for mobile dropdown toggles
                    if (parent.classList.contains('active')) {
                        parent.classList.remove('active');
                    } else {
                        closeAllDropdowns();
                        parent.classList.add('active');
                    }
                }
            });

            // Handle clicks on dropdown items
            const dropdownLinks = parent.querySelectorAll('.dropdown a');
            dropdownLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent the parent click handler from firing
                });
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.dropdown-parent')) {
                closeAllDropdowns();
            }
        });

        window.addEventListener('resize', closeAllDropdowns);
    } catch (error) {
        console.log('[DROPDOWN ERROR] ', error)
    }


});

function toggleMenu() {
    const hamburger = document.querySelector('.menu-btn');
    const menu = document.querySelector('.main-nav');
    const body = document.body;

    if (menu.getAttribute('data-shown') === 'hidden') {
        menu.setAttribute('data-shown', 'shown');
        hamburger.classList.add('active');
        hamburger.setAttribute("src", "/media/close.svg");
        body.style.overflow = 'hidden';
    } else {
        menu.setAttribute('data-shown', 'hidden');
        hamburger.classList.remove('active');
        hamburger.setAttribute("src", "/media/menu.svg");
        body.style.overflow = '';
    }
}