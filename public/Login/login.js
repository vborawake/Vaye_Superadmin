window.addEventListener('load', () => {
    document.querySelector('.container.flex_row').style.display = 'none';
    document.querySelector('.loader.flex_row.justify_center.center').style.display = 'flex';
    
    setTimeout(() => {
        document.querySelector('.container.flex_row').style.display = 'flex';
        document.querySelector('.loader.flex_row.justify_center.center').style.display = 'none';
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    addAnimations();
});

function addAnimations() {
    gsap.from('.left_section img', {
        y: '5rem',
        opacity: '0',
        duration: 0.5,
        delay: 1
    });
    gsap.from('.right_section', {
        y: '-5rem',
        opacity: '0',
        duration: 0.5,
        delay: 1
    });
    gsap.from('.left_section .content_wrapper #stagger', {
        y: '1rem',
        opacity: '0',
        duration: 0.5,
        delay: 1.5,
        stagger: {
            amount: 0.5
        }
    });
}