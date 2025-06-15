document.addEventListener('DOMContentLoaded', function() {
    const aim = document.querySelector('.aim');
    let angle = 0;
    let yOffset = 0;
    let direction = 1;

    function animate() {
        // Gentle floating motion
        yOffset += 0.8 * direction;
        if (yOffset > 10) direction = -1;
        if (yOffset < -10) direction = 1;

        // Subtle rotation
        angle += 0.6;
        if (angle >= 360) angle = 0;

        // Apply transformations
        aim.style.transform = `
            translateY(${yOffset}px) 
            rotate(${Math.sin(angle * Math.PI / 180) * 2}deg)
        `;

        requestAnimationFrame(animate);
    }

    animate();
});