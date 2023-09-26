const userPopup = document.getElementById('user_popup');
const verificatorPopup = document.getElementById('verificator_popup');
const authenticatorPopup = document.getElementById('authenticator_popup');
let activeTabName = '';
const main = document.querySelector('.main');
const addScreen = document.querySelector('.add_screen');

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

async function openPopup(element) {
    element.style.display = 'block';
    await gsap.from(element, {
        y: '-2rem',
        opacity: 1,
        duration: 0.5
    });
}

async function closePopup(element) {
    await gsap.to(element, {
        y: '2rem',
        opacity: 0,
        duration: 0.5,
        async onComplete() {
            element.style.display = 'none';
            element.style.opacity = 1;
            await gsap.to(element, { y: '0' });
        }
    });
}

async function showPopup(e, action) {
    if (action === 'open') await openPopup(userPopup);
    else if (action === 'openVerificator') await openPopup(verificatorPopup);
    else if (action === 'openAuthenticator') await openPopup(authenticatorPopup);
    else if (action === 'closeVerificator') await closePopup(verificatorPopup);
    else if (action === 'closeAuthenticator') await closePopup(authenticatorPopup);
    else await closePopup(userPopup);
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
    
    gsap.from('.table_stagger', {
        y: '-2rem',
        opacity: 0,
        stagger: 0.1
    });
}

function onTabChange(e) {
    activeTabName = e.target.innerText;
    if (activeTabName === 'Verificators' || activeTabName === 'Authenticators') {
        document.querySelector('.addVerificatorAuthenticator').style.display = 'block';
        activeTabName === 'Verificators' ? document.querySelector('.addVerificatorAuthenticator').innerHTML = 'Add Verificators' : document.querySelector('.addVerificatorAuthenticator').innerHTML = 'Add Authenticators';
    }
    else document.querySelector('.addVerificatorAuthenticator').style.display = 'none';
}

async function showAddScreen(e, action) {
    e.stopPropagation();
    if (action === 'open') {
        if (activeTabName === 'Verificators') {
            document.querySelector('p.m-0.text-left').innerHTML = 'Back &gt; Add Verificator';
        } else {
            document.querySelector('p.m-0.text-left').innerHTML = 'Back &gt; Add Authenticator';
        }
        await gsap.fromTo(main, {
            opacity: 1,
            y: 0
        },
        {
            opacity: 0, y: '-2rem',
            duration: 0.5,
            onComplete() {
                main.classList.add('d-none');
            }
        });
        addScreen.classList.add('d-flex');
        addScreen.classList.remove('d-none');
        await gsap.fromTo(addScreen, {
            opacity: 0,
            y: '-2rem'
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        });
    } else {
        await gsap.fromTo(addScreen, {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: '-2rem',
            duration: 0.5,
            onComplete() {
                addScreen.classList.add('d-none');
                addScreen.classList.remove('d-flex');
            }
        });
        main.classList.remove('d-none');
        main.classList.add('d-flex');
        await gsap.fromTo(main, {
            opacity: 0,
            y: '-2rem'
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5
        });
    }
}