// Header
const headerItems = document.querySelectorAll('.header-item a');

headerItems.forEach(item => {
    item.className = 'animated-underline'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navItems = document.querySelectorAll('#nav-items .header-item');

navItems.forEach(item => {
    mobileMenu.appendChild(item.cloneNode(true));
});

mobileMenuToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.transform = 'translateX(-200%)';
        mobileMenu.style.opacity = '0';
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 250);
    } else {
        mobileMenu.style.display = 'flex';
        mobileMenu.style.transform = 'translateX(-100%)';
        mobileMenu.style.opacity = '1';
    }
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'div') {
        mobileMenu.style.transform = 'translateX(-100%)';
        mobileMenu.style.opacity = '0';
    }
});
