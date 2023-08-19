const area = document.getElementById('area');
const areaCtx = area ? area.getContext('2d') : undefined;
const bar = document.getElementById('bar');
const barCtx = bar ? bar.getContext('2d') : undefined;
const bar2 = document.getElementById('bar2');
const bar2Ctx = bar2 ? bar2.getContext('2d') : undefined;
const traffic = document.getElementById('traffic_line');
const trafficCtx = traffic ? traffic.getContext('2d') : undefined;
const splash = document.getElementById('splash_screen');
const intro = document.getElementById('intro_screen');
const testimonials = document.getElementById('testimonials_screen');
const subscription = document.getElementById('subscription_screen');
const terms = document.getElementById('terms_screen');
const main = document.querySelector('.main_screen');
const testimonialPopup = document.querySelector('#testimonials_popup');
const subscriptionPopup = document.querySelector('#subscription_popup');

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) {
        document.getElementById('toggle_sidebar').classList.add('offcanvas');
    }
    
    if (areaCtx) {
        new Chart(areaCtx, {
            type: 'line',
            data: {
                labels: ['24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [ '40', '50', '70', '60', '60', '90', '120' ],
                        backgroundColor: '#EEF2FC',
                        borderColor: '#09338F',
                        fill: true
                    }
                ]
            }
        });
    }

    if (trafficCtx) {
        new Chart(trafficCtx, {
            type: 'line',
            data: {
                labels: ['24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [ '40', '50', '70', '60', '60', '90', '120' ],
                        borderColor: '#09338F',
                        cubicInterpolationMode: 'monotone'
                    },
                    {
                        label: 'Dataset 2',
                        data: [ 22, 7, 41, 14, 35, 3, 48 ],
                        borderColor: '#F34444',
                        cubicInterpolationMode: 'monotone'
                    },
                    {
                        label: 'Dataset 3',
                        data: [ 38, 13, 26, 45, 5, 49, 17 ],
                        borderColor: '#00A962',
                        cubicInterpolationMode: 'monotone'
                    },
                    {
                        label: 'Dataset 4',
                        data: [ 10, 28, 43, 6, 36, 25, 47 ],
                        borderColor: '#C9D522',
                        cubicInterpolationMode: 'monotone'
                    }
                ]
            }
        });
    }
    
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04', '24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04', '24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04', '24/04', '25/04', '26/04', '27/04', '28/04', '29/04'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [ 25, 9, 49, 5, 7, 8, 41, 32, 46, 43, 28, 26, 23, 33, 2, 47, 4, 24, 15, 50, 33, 2, 47, 4, 24, 15, 50 ],
                        borderRadius: 50,
                        backgroundColor: '#09338F',
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    if (bar2Ctx) {
        new Chart(bar2Ctx, {
            type: 'bar',
            data: {
                labels: ['24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04', '24/04'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [ 25, 9, 49, 5, 7, 8, 41, 32 ],
                        borderRadius: 50,
                        backgroundColor: '#00A962',
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
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

async function showPopup(e, action) {
    e.stopPropagation();
    if (action === 'testimonials_open') {
        if (e.currentTarget.nodeName === 'IMG') testimonialPopup.querySelector('.popup_header-left p').innerHTML = 'Edit Testimonial';
        openPopup(testimonialPopup);
    }
    else if (action === 'testimonials_close') closePopup(testimonialPopup);
    else if (action === 'subscription_open') {
        if (e.currentTarget.nodeName === 'IMG') subscriptionPopup.querySelector('.popup_header-left p').innerHTML = 'Edit Subscription Plan';
        openPopup(subscriptionPopup);
    }
    else if (action === 'subscription_close') closePopup(subscriptionPopup);
}

async function openPopup (element) {
    element.style.display = 'block';
    await gsap.from(element, {
        y: '-2rem',
        opacity: 1,
        duration: 0.5
    });
}

async function closePopup (element) {
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

function changeTab(event) {
    Array.from(event.currentTarget.children).forEach(tab => {
        tab.classList.remove('active');
    });

    event.target.classList.add('active');
}

async function changeScreen(e, screen) {
    if (screen !== 'main') {
        await gsap.to(main, {
            y: '2rem',
            opacity: 0,
            duration: 0.5,
            async onComplete() {
                main.style.setProperty('display', 'none', 'important');
                await gsap.to(main, {
                    y: '0',
                    opacity: 1
                })
            }
        });
    }
    if (screen === 'splash_screen') {
        splash.style.display = 'flex';
        await gsap.from(splash, {
            y: '-2rem',
            opacity: 1,
            duration: 0.5
        });
    } else if (screen === 'terms_screen') {
        terms.style.display = 'flex';
        await gsap.from(terms, {
            y: '-2rem',
            opacity: 1,
            duration: 0.5
        });
    } else if (screen === 'intro_screen') {
        intro.style.display = 'flex';
        await gsap.from(intro, {
            y: '-2rem',
            opacity: 1,
            duration: 0.5
        });
    } else if (screen === 'testimonials_screen') {
        testimonials.style.display = 'flex';
        await gsap.from(testimonials, {
            y: '-2rem',
            opacity: 1,
            duration: 0.5
        });
    } else if (screen === 'subscription_screen') {
        subscription.style.display = 'flex';
        await gsap.from(subscription, {
            y: '-2rem',
            opacity: 1,
            duration: 0.5
        });
    } else if (screen === 'main') {
        const currentScreen = e.currentTarget.parentElement;
        
        await gsap.to(currentScreen, {
            y: '2rem',
            opacity: 0,
            duration: 0.5,
            async onComplete() {
                currentScreen.style.setProperty('display', 'none', 'important');
                await gsap.to(currentScreen, {
                    y: '0',
                    opacity: 1
                })
            }
        });
        main.style.display = 'flex';
        await gsap.from(main, {
            y: '-2rem',
            opacity: 1,
            duration: 0.5
        });
    } 
}