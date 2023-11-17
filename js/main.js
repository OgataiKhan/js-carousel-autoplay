'use strict';

//1. In javascript we create an array containing the file names of the images and save it as a variable.
// 2. We create an "items" variable that will contain the html div element that will contain all our images.
// 3. We create a variable that represents the position of the currently active slide in the array.
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
let currentSlide = 0;
// Bonus 2: We create a "thumbnails" variable that will contain html div element that will contain all our thumbnails.
const thumbnails = document.querySelector('.thumbnails');

// 5. We use a for loop to add the images to the html using a template literal.
// Bonus 2: We also add the thumbnails.
for (let i = 0; i < images.length; i++) {
    items.innerHTML += `<div class="item"><img src="img/${images[i]}" alt="Image ${i+1}"></div>`;
    thumbnails.innerHTML += `<div class="thumbnail"><img src="img/${images[i]}" alt="Image ${i+1} thumbnail"></div>`
}

// 6. We add the "active" class to the first slide.
// Bonus 2: We also add the "highlighted" class to the first thumbnail.
const firstItem = items.querySelector('.item');
firstItem.classList.add('active');
const firstThumbnail = thumbnails.querySelector('.thumbnail');
firstThumbnail.classList.add('highlighted');

// 7. We create a variable that selects all of our slides in the html.
// Bonus 2: We also create a variable that selects all of our thumbnails in the html.
const domSlides = document.querySelectorAll('.item');
const domThumbnails = document.querySelectorAll('.thumbnail');

// 4. We create variables that represent the "prev" and "next" arrows in our document
// 8. We use addEventListener to cycle through the images when we click on the arrows, making sure we can't continue past the first and last image.
// Bonus 1: Add "else" conditions to make the carousel cyclical.
// Bonus 2: We manage the "highlighted" class of our active thumbnail the same way we did with the "active" class of our active image.
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
    domSlides[currentSlide].classList.remove('active');
    domThumbnails[currentSlide].classList.remove('highlighted');
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = domSlides.length - 1;
    }
    domSlides[currentSlide].classList.add('active');
    domThumbnails[currentSlide].classList.add('highlighted');
})

next.addEventListener('click', function() {
    domSlides[currentSlide].classList.remove('active');
    domThumbnails[currentSlide].classList.remove('highlighted');
    if (currentSlide < domSlides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    domSlides[currentSlide].classList.add('active');
    domThumbnails[currentSlide].classList.add('highlighted');
})

// Bonus 3: Use a for loop to attach an event listener to each thumbnail.
// Bonus 3: On click on a thumbnail, remove the "active" and "highlighted" classes from the active image and thumbnail and add them to the clicked image instead.
for (let i = 0; i < domThumbnails.length; i++) {
    domThumbnails[i].addEventListener('click', function() {
        domSlides[currentSlide].classList.remove('active');
        domThumbnails[currentSlide].classList.remove('highlighted');
        currentSlide = i;
        domSlides[currentSlide].classList.add('active');
        domThumbnails[currentSlide].classList.add('highlighted');
    });
}