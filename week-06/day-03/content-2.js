'use strict';

const plchList = document.querySelectorAll('li');

plchList.forEach((elem, index) => {
  elem.innerHTML = ['apple', 'banana', 'cat', 'dog'][index];
});
document.querySelector('ul').style.backgroundColor = 'limegreen';
