document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) {
        document.getElementById('toggle_sidebar').classList.add('offcanvas');
    }

    addAnimations();
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        // document.getElementById('sidebar').style.display = 'none';
        document.getElementById('toggle_sidebar').classList.add('offcanvas');
    } else {
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('toggle_sidebar').classList.remove('offcanvas');
    }
});

function changeScreen(e, action) {
    if (action === 'edit') {
        if (e.currentTarget.innerHTML === 'Change Password') {
            document.querySelector('#edit').style.display = 'none';
            document.querySelector('#password').style.display = 'block';
        }
        document.querySelector('#edit #main_content_header button').innerHTML = 'Change Password';
        document.querySelector('#edit #main_content_header p').innerHTML = 'Back > View Profile';
        document.querySelector('.profile_picture').style.display = 'flex';
        gsap.from(document.querySelector('.profile_picture'), {
            y: '-2rem',
            opacity: 0,
            duration: 0.5
        });
        document.querySelectorAll('.input input').forEach(input => {
            input.style.border = '2px solid #09338F';
        });
        document.querySelector('#button_update').style.display = 'block';
    } else if (action === 'back') {
        if (e.currentTarget.innerText === 'Back > View Profile') {
            document.querySelector('#edit #main_content_header button').innerHTML = 'Edit Profile';
            document.querySelector('#edit #main_content_header p').innerHTML = 'View Profile';
            gsap.from(document.querySelector('.profile_picture'), {
                y: '2rem',
                opacity: 0,
                duration: 0.5,
                onComplete() {
                    document.querySelector('.profile_picture').style.setProperty('display', 'none', 'important');
                }
            });
            document.querySelectorAll('.input input').forEach(input => {
                input.style.border = 'none';
            });
            document.querySelector('#button_update').style.display = 'none';
        } else {
            document.querySelector('#edit #main_content_header button').innerHTML = 'Change Password';
            document.querySelector('#edit #main_content_header p').innerHTML = 'Back > View Profile';
            document.querySelector('.profile_picture').style.display = 'flex';
            gsap.from(document.querySelector('.profile_picture'), {
                y: '-2rem',
                opacity: 0,
                duration: 0.5
            });
            document.querySelectorAll('.input input').forEach(input => {
                input.style.border = '2px solid #09338F';
            });
            document.querySelector('#button_update').style.display = 'block';
            document.querySelector('#edit').style.display = 'block';
            document.querySelector('#password').style.display = 'none';
        }
    }
}

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

    gsap.from('.stagger', {
        y: '-2rem',
        opacity: 0,
        stagger: 0.1
    });
}