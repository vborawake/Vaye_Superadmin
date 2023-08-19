const popup = document.querySelector('.popup');

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) {
        document.getElementById('toggle_sidebar').classList.add('offcanvas');
    }

    addAnimations();
});

async function showPopup(e, action) {
    if (action === 'open') {
        popup.style.display = 'block';
        await gsap.from(popup, {
            y: '-2rem',
            opacity: 1,
            duration: 0.5
        });
    } else {
        await gsap.to(popup, {
            y: '2rem',
            opacity: 0,
            duration: 0.5,
            async onComplete() {
                popup.style.display = 'none';
                popup.style.opacity = 1;
                await gsap.to(popup, { y: '0' });
            }
        });
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        // document.getElementById('sidebar').style.display = 'none';
        document.getElementById('toggle_sidebar').classList.add('offcanvas');
    } else {
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('toggle_sidebar').classList.remove('offcanvas');
    }
});

function addAnimations() {
    gsap.from('#sidebar', {
        x: '-2rem',
        opacity: 0,
        duration: 1
    });

    gsap.from('#header', {
        y: '-2rem',
        opacity: 0,
        duration: 1
    });

    // gsap.from('.stagger', {
    //     y: '-2rem',
    //     opacity: 0,
    //     stagger: 0.1
    // });
}