// Your code goes here

// FUN BUS TEXT COLORING (MOUSE OVER) (#1-#2)
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('mouseover', function (event) {
    funBus.style.color = 'green';
});
funBus.addEventListener('mouseleave', function (event) {
    funBus.style.color = 'black';
});

// NAV BAR CUSTOMS (SCROLL) (#3)
const navBar = document.querySelector('.nav-link')
window.addEventListener('scroll', function (event) {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        alert("You've reached the end of our page!");
    }
});

// FUN BUS EASTER EGG ON 'F' PRESS (KEYDOWN) (#4)
const title = document.querySelector('.logo-heading');
const busImg = document.querySelector('.intro img');
const site = document.querySelector('.main-navigation')
document.addEventListener('keydown', function (event) {
    if (event.key === "f") {
        title.style.fontSize = '6em';
        busImg.style.transform = 'scaleX(-1)';
        site.style.backgroundColor = '#ACD1E1';
    }
});

// COLORS (LOAD) (#5)
const subHeader = document.querySelector('h2');
window.addEventListener('load', function (event) {
    subHeader.style.color = 'red';
});

// INTRO TEXT ZOOM (WHEEL) (#6)
const intro = document.querySelector('p');
intro.addEventListener('wheel', function (event) {
    intro.style.fontSize = '2em';
});

// PICTURE INVERTS (#7)
const secondImg = document.querySelector('.img-content img')
secondImg.addEventListener('click', function (event) {
    secondImg.style.filter = 'invert(1)';

    setTimeout(function() {
        secondImg.style.filter = 'invert(0)';
    }, 1000);
});

// THIRD PICTURE SCALE (#8)
const thirdImg = document.querySelector('.img-fluid')
thirdImg.addEventListener('dblclick', function (event) {
    thirdImg.style.height = '100px';
    
    setTimeout(function() {
        thirdImg.style.height = '';
    }, 1000);
});

// CONTEXT MENU (#9)
const letsGo = document.querySelector('.content-section h2')
document.addEventListener('contextmenu', function (event) {
    letsGo.textContent = "Trynna inspect?";
})
document.addEventListener('click', function (event) {
    letsGo.textContent = "Let's Go!";
})

// DRAGGING (#10)
secondImg.addEventListener('drag', function(event) {
    letsGo.textContent = "Let it go!";
})
secondImg.addEventListener('dragend', function (event) {
    letsGo.textContent = "Let's Go!";
})