const menuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('#nav-menu');

menuIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    navMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnIcon = menuIcon.contains(event.target);

    if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnIcon) {
        navMenu.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});