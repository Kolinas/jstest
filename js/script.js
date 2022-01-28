'use strict';

const mainImage = document.querySelector('.img_gal');
const minImage = document.querySelector('.gallery_min');

const images =['min_img1.png', `min_img2.png`, `min_img3.png`];


for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${image}`);
    minImage.appendChild(newImage);
    newImage.addEventListener('click', e => mainImage.src = e.target.src);
  }





