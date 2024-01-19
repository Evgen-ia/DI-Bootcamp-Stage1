document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const animate = document.getElementById('animate');
    const button = document.querySelector('button');

    let currentPosition = 0;

    function moveAnimate() {
        currentPosition += 1;
        animate.style.left = currentPosition + 'px';

        if (currentPosition >= container.offsetWidth - animate.offsetWidth) {
            clearInterval(animationInterval);
        }
    }

    button.addEventListener('click', function () {
        currentPosition = 0;
        animate.style.left = currentPosition + 'px';
        animationInterval = setInterval(moveAnimate, 10);
    });
});
