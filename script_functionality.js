const sidenavOpenBtn = document.getElementById('sidenavOpenBtn');
const sidenavCloseBtn = document.getElementById('sidenavCloseBtn');
const sidenav = document.getElementById('sidenav');

const backgroundBtn = document.getElementById('BackgroundBtn');
const trailersBtn = document.getElementById('TrailersBtn');

const backgroundBox = document.getElementById('backgroundBox');
const trailersBox = document.getElementById('trailersBox');

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');
const bg3 = document.getElementById('bg3');
const bg4 = document.getElementById('bg4');
const bg5 = document.getElementById('bg5');
const bg6 = document.getElementById('bg6');
const bg7 = document.getElementById('bg7');
const bg8 = document.getElementById('bg8');

const body = document.body;

function onClick(button, handler) {
    button.addEventListener('click', handler);
}

function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}

function openSidenav() {
    show(sidenav);
    sidenav.style.animation = 'slideIn 0.3s ease-out forwards';
    setTimeout(function () {
        sidenav.style.animation = '';
    }, 300);
}

function closeSidenav() {
    sidenav.style.animation = 'slideOut 0.3s forwards';
    setTimeout(function () {
        sidenav.style.animation = '';
        hide(sidenav);
    }, 300);
}

function changeBG(img) {
    if (img === "") {
        body.style.backgroundImage = "";
        body.style.transition = 'background-image 0.5s ease-in-out';
        return;
    }
    body.style.backgroundImage = `url('${img}')`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.transition = 'background-image 0.5s ease-in-out';
    body.style.backgroundAttachment = 'fixed';
}

function setShadow() {
    const allElements = document.body.querySelectorAll('*:not(#sectionText, #sidenav *)');
    allElements.forEach(element => {
        element.style.textShadow = '0 4px 15px rgba(0, 0, 0, 0.9)';
    });
}

onClick(sidenavCloseBtn, function () {
    closeSidenav();
});

onClick(sidenavOpenBtn, function () {
    openSidenav();
});

onClick(backgroundBtn, function () {
    trailersBtn.classList.remove('active');
    backgroundBtn.classList.add('active');
    show(backgroundBox);
    hide(trailersBox);
});

onClick(trailersBtn, function () {
    backgroundBtn.classList.remove('active');
    trailersBtn.classList.add('active');
    hide(backgroundBox);
    show(trailersBox);
});

document.addEventListener('click', function (event) {
    const isSidenav = sidenav.contains(event.target);
    const isOpenBtn = sidenavOpenBtn.contains(event.target);
    if (!isSidenav && !isOpenBtn && !sidenav.classList.contains('hidden')) {
        closeSidenav();
    }
});

// Background part ----------------->

function setupBackground(element, imageURL, gradientColor = '') {
    const sectionText = document.getElementById('sectionText');
    onClick(element, function () {
        changeBG(imageURL);
        setShadow();
        sectionText.style.background = gradientColor;
        sectionText.style.backgroundClip = 'text';
        sectionText.style.color = 'transparent';
    });
}

setupBackground(bg1, 'img/backgrounds/marina.webp', 'linear-gradient(178deg,rgba(68, 29, 222, 1) 0%, rgba(125, 120, 255, 1) 50%, rgba(52, 149, 201, 1) 100%)');
setupBackground(bg2, 'img/backgrounds/vice-city.webp', 'linear-gradient(178deg,rgba(222, 29, 119, 1) 0%, rgba(21, 81, 150, 1) 76%, rgba(52, 149, 201, 1) 100%)');
setupBackground(bg3, 'img/backgrounds/bridge-view.webp', 'linear-gradient(178deg,rgba(255, 75, 159, 1) 0%, rgba(41, 43, 207, 1) 40%, rgba(27, 133, 124, 1) 100%)');
setupBackground(bg4, 'img/backgrounds/ocean-view.webp', 'linear-gradient(178deg,rgba(28, 5, 46, 1) 0%, rgba(21, 81, 150, 1) 60%, rgba(153, 37, 37, 1) 100%)');
setupBackground(bg5, 'img/backgrounds/street-art.webp', 'linear-gradient(178deg,rgba(222, 29, 119, 1) 0%, rgba(21, 81, 150, 1) 76%, rgba(52, 149, 201, 1) 100%)');
setupBackground(bg6, 'img/backgrounds/strip-club.webp', 'linear-gradient(178deg,rgba(42, 29, 222, 1) 0%, rgba(150, 21, 109, 1) 60%, rgba(241, 115, 115, 1) 100%)');
setupBackground(bg7, 'img/backgrounds/strip-club-entrance.webp', 'linear-gradient(182deg, rgba(217, 43, 107, 1) 0%, rgba(78, 44, 216, 1) 88%)');
setupBackground(bg8, '');