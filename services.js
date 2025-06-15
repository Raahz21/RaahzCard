document.addEventListener('DOMContentLoaded', function() {
    console.log('Services page loaded');

    const navLinks = document.querySelectorAll('.card-image-navbar a');
    const carousels = document.querySelectorAll('.carousel');

    // Hide all carousels except first one
    carousels.forEach((carousel, index) => {
        if (index !== 0) carousel.style.display = 'none';
    });

    // Navigation link click handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Hide all carousels
            carousels.forEach(carousel => {
                carousel.style.display = 'none';
            });
            
            // Show target carousel
            document.getElementById(targetId).style.display = 'block';
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Carousel navigation - manual only
    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let currentIndex = 0;

        function showItem(index) {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        }

        prevBtn?.addEventListener('click', () => {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            showItem(currentIndex);
        });

        nextBtn?.addEventListener('click', () => {
            currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            showItem(currentIndex);
        });
    });
});