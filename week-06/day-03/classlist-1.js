'use strict';

const paraList = document.querySelectorAll('p');

if (paraList[3].classList.contains('dolphin')) {
  document.querySelector('.apple').innerHTML = 'pear';
}
if (paraList[0].classList.contains('apple')) {
  document.querySelector('.cat').innerHTML = 'dog';
}
paraList[0].classList.add('red');
document.querySelector('.balloon').classList.remove('balloon');
