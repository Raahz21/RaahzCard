document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.animate-text');
    const letters = text.querySelectorAll('span');
    let isAnimating = false;

    text.addEventListener('mouseover', function() {
        if (isAnimating) return;
        isAnimating = true;

        letters.forEach((letter, index) => {
            setTimeout(() => {
                // Add wave transform
                letter.style.transform = 'translateY(-10px)';
                letter.classList.add('wave-color');

                // Reset after animation
                setTimeout(() => {
                    letter.style.transform = 'translateY(0)';
                    letter.classList.remove('wave-color');
                    
                    // Reset animation flag after last letter
                    if (index === letters.length - 1) {
                        setTimeout(() => {
                            isAnimating = false;
                        }, 500);
                    }
                }, 500);
            }, index * 50); // Stagger the animation
        });
    });
});