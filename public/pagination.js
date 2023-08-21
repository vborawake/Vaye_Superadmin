const profileElement = document.querySelector('#user img:nth-child(3)');
const usernameElement = document.querySelector('#user p');
const eye = document.querySelector('.eye');
const input = eye ? eye.previousElementSibling : undefined;
let start = 0;
let end = 0;

function showMenu(event) {
    if (document.querySelector('#nav_menu').style.transform === '' || document.querySelector('#nav_menu').style.transform === 'scale(1, 0)') {
        gsap.to('#nav_menu', {
            scaleY: 1
        });
    } else {
        gsap.to('#nav_menu', {
            scaleY: 0
        });
    }
}

profileElement.addEventListener('click', () => {
    showMenu();
})
usernameElement.addEventListener('click', () => {
    showMenu();
})

function showNotifications(e) {
    if (document.querySelector('.notifications_container').style.transform === '' || document.querySelector('.notifications_container').style.transform === 'scale(1, 0)') {
        gsap.to(document.querySelector('.notifications_container'), {
            scaleY: 1,
            duration: 0.5
        });
    } else {
        gsap.to(document.querySelector('.notifications_container'), {
            scaleY: 0,
            duration: 0.5
        });
    }
}

function showPassword(e) {
    if (eye && input) {
        if (input.getAttribute('type') === 'password') input.setAttribute('type', 'text');
        else input.setAttribute('type', 'password');
    }
}

function changePage(e) {
    const start = parseInt(e.target.innerText - 1) * 5;
    const end = start + 5;

    let currentTab;
    document.querySelectorAll('.table_nav .nav-link').forEach(tab => {
        if (tab.classList.contains('active')) {
            currentTab = tab.getAttribute('data-bs-target');
            console.log(currentTab);
        }
    });

    if (currentTab) {
        document.querySelectorAll(`${ currentTab } #table_value`);
    }
}