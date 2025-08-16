document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Mobile Menu Toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // Change icon to 'x' when active
    };

    // Close mobile menu when a navigation link is clicked
    document.querySelectorAll('.navbar a').forEach(link => {
        link.onclick = () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        };
    });

    // Close mobile menu when clicking outside of it (optional)
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});
