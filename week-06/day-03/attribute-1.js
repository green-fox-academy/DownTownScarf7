'use strict';

const img = document.querySelector('img');
const btn = document.querySelector('.this-one');
console.log(img.getAttribute('src'));
img.setAttribute('src', 'https://www.pets4homes.co.uk/images/breeds/50/large/d248d59954bb644e4437cce1758a9ce2.jpg');
document.querySelector('a').setAttribute('href', 'https://www.reddit.com/r/dankmemes/');
btn.setAttribute('disabled', null);
btn.innerHTML = 'Don\'t click me!';
