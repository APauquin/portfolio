/* encryption effect */

const text = document.getElementById('decrypt');
const originalText = text.textContent;
const randomChars = '!<>-_\\/[]{}—=+*^?#________';
let randomText = '';
let count = 0;

for(let i = 0; i < originalText.length; i++) {
    randomText += randomChars[Math.floor(Math.random() * randomChars.length)];
}

text.textContent = randomText;

let totalDuration = window.innerWidth < 768 ? 2000 : 3000;
let startTime;

function updateText(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }

    const elapsed = timestamp - startTime;
    const progress = elapsed / totalDuration;

    count = Math.floor(progress * originalText.length);

    let mixText = '';
    for(let i = 0; i < originalText.length; i++) {
        mixText += (i <= count) ? originalText[i] : randomChars[Math.floor(Math.random() * randomChars.length)];
    }

    text.textContent = mixText;

    if(elapsed < totalDuration) {
        requestAnimationFrame(updateText);
    }
}

setTimeout(() => requestAnimationFrame(updateText), 500);

/* dark mode js */
document.getElementById('toggle-check').addEventListener('change', function() {
    document.body.classList.toggle('darkMode');

    const imageElements = document.querySelectorAll('.image-switch');

    imageElements.forEach(imgElement => {
        if(document.body.classList.contains('darkMode')) {
            imgElement.dataset.lightMode = imgElement.src;
            imgElement.src = imgElement.dataset.darkMode;
        } else {
            imgElement.src = imgElement.dataset.lightMode;
        }
    });
});


window.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');

    function handleScrollSnap() {
        const scrollTop = scrollContainer.scrollTop;
        const snapHeight = window.innerHeight;
        const snapIndex = Math.round(scrollTop / snapHeight);
        scrollContainer.scrollTo({
            top: snapIndex * snapHeight,
            behavior: 'smooth'
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('#navbarNavDropdown .nav-link');
    const navbarDropdown = document.getElementById('navbarNavDropdown');
    const navbarToggler = document.querySelector('.navbar-toggler');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarDropdown.classList.remove('show');
            navbarToggler.classList.add('collapsed');
        });
    });
});

const arrowContainer = document.querySelector('.arrowContainer');

let observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        setTimeout(() => {
            arrowContainer.style.opacity = '1';
        }, 100);
    } else {
        arrowContainer.style.opacity = '0';
    }
}, { threshold: 0.1 });

observer.observe(arrowContainer);

window.addEventListener('load', function() {
    const phoneImage = document.querySelector('.phone');
    const contactImageContainer = document.querySelector('.contactImageContainer');

    const imgWidth = phoneImage.offsetWidth;
    contactImageContainer.style.setProperty('--img-width', imgWidth + "px");
});
