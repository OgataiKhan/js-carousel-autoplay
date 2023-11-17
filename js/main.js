'use strict';

// FUNCTIONS
// Prev function
function prevFn() {
    domSlides[currentSlide].classList.remove('active');
    domThumbnails[currentSlide].classList.remove('highlighted');
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = domSlides.length - 1;
    }
    domSlides[currentSlide].classList.add('active');
    domThumbnails[currentSlide].classList.add('highlighted');
}

// Next function
function nextFn() {
    domSlides[currentSlide].classList.remove('active');
    domThumbnails[currentSlide].classList.remove('highlighted');
    if (currentSlide < domSlides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    domSlides[currentSlide].classList.add('active');
    domThumbnails[currentSlide].classList.add('highlighted');
}

// VARIABLES
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
let currentSlide = 0;
const thumbnails = document.querySelector('.thumbnails');

// Add items and thumbnails to DOM
for (let i = 0; i < images.length; i++) {
    items.innerHTML += `<div class="item"><img src="img/${images[i]}" alt="Image ${i + 1}"></div>`;
    thumbnails.innerHTML += `<div class="thumbnail"><img src="img/${images[i]}" alt="Image ${i + 1} thumbnail"></div>`
}

// Add "active" and "highlighted" classes to the first item and thumbnail respectively
const firstItem = items.querySelector('.item');
firstItem.classList.add('active');
const firstThumbnail = thumbnails.querySelector('.thumbnail');
firstThumbnail.classList.add('highlighted');

// Variables after DOM rewriting
const domSlides = document.querySelectorAll('.item');
const domThumbnails = document.querySelectorAll('.thumbnail');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Manage arrow clicks
prev.addEventListener('click', prevFn);
next.addEventListener('click', nextFn);

// Manage thumbnail clicks
for (let i = 0; i < domThumbnails.length; i++) {
    domThumbnails[i].addEventListener('click', function () {
        domSlides[currentSlide].classList.remove('active');
        domThumbnails[currentSlide].classList.remove('highlighted');
        currentSlide = i;
        domSlides[currentSlide].classList.add('active');
        domThumbnails[currentSlide].classList.add('highlighted');
    });
}

// Autoplay
let autoplayFn = setInterval(nextFn, 3_000);
autoplayFn;

// Buttons
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

startBtn.addEventListener('click', function() {
    clearInterval(autoplayFn);
    autoplayFn = setInterval(nextFn, 3000);
    stopBtn.innerHTML = '&#9208;';
});
stopBtn.addEventListener('click', function() {
    clearInterval(autoplayFn);
    stopBtn.innerHTML = '&#9632;';
});