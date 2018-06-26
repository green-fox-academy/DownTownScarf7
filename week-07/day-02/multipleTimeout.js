'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

console.log('apple');

setTimeout(() => { console.log('Take 1: pear'); }, 1000);
setTimeout(() => { console.log('Take 1: melon'); }, 3000);
setTimeout(() => { console.log('Take 1: grapes'); }, 5000);

setTimeout(() => { console.log('Take 2: pear');
setTimeout(() => { console.log('Take 2: melon');
setTimeout(() => { console.log('Take 2: grapes');
}, 2000);
}, 2000);
}, 1000);
