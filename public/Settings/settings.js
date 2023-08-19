const area = document.getElementById('area');
const areaCtx = area ? area.getContext('2d') : undefined;
const bar = document.getElementById('bar');
const barCtx = bar ? bar.getContext('2d') : undefined;
const bar2 = document.getElementById('bar2');
const bar2Ctx = bar2 ? bar2.getContext('2d') : undefined;
const traffic = document.getElementById('traffic_line');
const trafficCtx = traffic ? traffic.getContext('2d') : undefined;
const popup = document.querySelector('.popup');

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

    gsap.from('.stagger', {
        y: '-2rem',
        opacity: 0,
        stagger: 0.1
    });
}

async function changeScreen(e) {
    if (e.currentTarget.innerText === 'Back > Notification Settings') {
        await gsap.to(document.querySelector('#notification_settings_content'), {
            y: '-2rem',
            opacity: 0,
            duration: 0.5,
            onComplete() {
                document.querySelector('#notification_settings_content').style.setProperty('display', 'none', 'important');
                document.querySelector('#notification_settings_content').style.opacity = 1;
                gsap.to(document.querySelector('#notification_settings_content'), {
                    y: 0
                });
                document.querySelector('#settings_content').style.display = 'block';
            }
        });

        await gsap.from(document.querySelector('#settings_content'), {
            y: '2rem',
            opacity: 0,
            duration: 0.5
        });
    } else {
        await gsap.to(document.querySelector('#settings_content'), {
            y: '-2rem',
            opacity: 0,
            duration: 0.5,
            onComplete() {
                document.querySelector('#settings_content').style.setProperty('display', 'none', 'important');
                document.querySelector('#settings_content').style.opacity = 1;
                gsap.to(document.querySelector('#settings_content'), {
                    y: 0
                })
                document.querySelector('#notification_settings_content').style.display = 'block';
            }
        });

        await gsap.from(document.querySelector('#notification_settings_content'), {
            y: '2rem',
            opacity: 0,
            duration: 0.5
        });
    }
}