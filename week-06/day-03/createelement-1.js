'use strict';

const astList = document.querySelector('.asteroids'),
      container = document.querySelector('.container');

astList.appendChild(document.createElement('li')).innerHTML = 'The Green Fox';
astList.appendChild(document.createElement('li')).innerHTML = 'The Lamplighter';

container.appendChild(document.createElement('h2')).innerHTML = 'I can add elements to the DOM!';
container.appendChild(document.createElement('img')).setAttribute('src', 'http://i0.kym-cdn.com/entries/icons/original/000/019/662/CPjU1F1UwAAoAGs.jpg');
