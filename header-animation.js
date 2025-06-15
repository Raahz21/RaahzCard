document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.animate-text');
    const letters = text.querySelectorAll('span');
    
    // Initial animation
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('active');
        }, 100 * index);
    });

    // Hover wave effect
    text.addEventListener('mouseover', function() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    letter.style.transform = 'translateY(0)';
                }, 200);
            }, 50 * index);
        });
    });

    // Random sparkle effect
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const letter = letters[randomIndex];
        letter.style.textShadow = '0 0 20px #fff';
        setTimeout(() => {
            letter.style.textShadow = 'none';
        }, 500);
    }, 2000);
});