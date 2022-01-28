'use strict';

const mainImage = document.querySelector('.img_gal');
const minImage = document.querySelector('.gallery_min');

const images =['min_img1.jpg', `min_img2.jpg`, `min_img3.jpg`];


for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${image}`);
    minImage.appendChild(newImage);
    newImage.addEventListener('click', e => mainImage.src = e.target.src);
  }





