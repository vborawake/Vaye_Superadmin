const area = document.getElementById('area');
const areaCtx = area ? area.getContext('2d') : undefined;

window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
        // document.getElementById('sidebar').style.display = 'none';
        document.getElementById('toggle_sidebar').classList.add('offcanvas');
        document.getElementById('chat_section_offcanvas').classList.add('offcanvas');
        document.getElementById('chat_section_navbar').style.display = 'block';
    } else {
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('chat_section_navbar').style.display = 'none';
        document.getElementById('toggle_sidebar').classList.remove('offcanvas');
        document.getElementById('chat_section_offcanvas').classList.remove('offcanvas');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 992) {
        document.getElementById('toggle_sidebar').classList.add('offcanvas');
        document.getElementById('chat_section_offcanvas').classList.add('offcanvas');
    }

    document.querySelectorAll('#chat_user').forEach(chatUser => {
        chatUser.addEventListener('click', (e) => {
            Array.from(e.currentTarget.parentElement.children).forEach(user => {
                user.classList.remove('active');
            });

            e.currentTarget.classList.add('active');
        });
    });
    
    addAnimations();
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

    gsap.from('#chat_left_section #chat_user', {
        y: '-2rem',
        delay: 0.5,
        opacity: 0,
        stagger: 0.1
    });

    gsap.from('#chat_left_section', {
        x: '-2rem',
        opacity: 0,
        duration: 0.5
    });

    gsap.from('#messages_section', {
        x: '2rem',
        opacity: 0,
        duration: 0.5
    });
}