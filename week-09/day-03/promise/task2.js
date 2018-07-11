'use strict';

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => { fulfill('FULFILLED!'); }, 300);
}).then(fulfilled => {
  console.log(fulfilled);
});
