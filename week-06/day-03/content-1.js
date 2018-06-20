'use strict';

const content = document.querySelector('.animals').innerHTML;
document.querySelectorAll('p').forEach(elem => {
  elem.innerHTML = content;
});
