function toggleDetails(card) {
    document.querySelectorAll('.service-card').forEach(function(c) {
        if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
}
function toggleNavbar() {
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('.hamburger').classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            document.querySelector('.nav-links').classList.remove('nav-active');
            document.querySelector('.hamburger').classList.remove('open');
        });
    });
});

