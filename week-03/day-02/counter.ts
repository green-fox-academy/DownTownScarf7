'use strict';

function counter(num: number): void {
  console.log(num);
  if (num > 0) {
    counter(num - 1);
  }
}

counter(50);
