'use strict';
console.log('Hello World!\n');

// (hello-me) Modified to say my name
console.log('Hello Bence!\n');

// (humpty-dumpty) Reorganized
console.log('Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the king\'s horses and all the king\'s men\nCouldn\'t put Humpty together again.\n');

// (hello-others) Greeting three classmates
console.log('Hello Orsi!\nHello Sanyi!\nHello Nori!\n')

// (intruduce-yourself) Hi!
console.log('\nBence Vidosits\n22\n1.75\n')

// (two-numbers) Doing operations on x and y
function qikmafs(num1, num2) {

    console.log(num1 + num2, num2 - num1, num1 * num2, num2 / num1, num2 % num1);

    return true;
}
qikmafs(13, 22);

// (coding-hours) Calculating...
function codingHours(hours, weeks, awh) {

 // Hours spent coding in a semester
    console.log(weeks * 5 * hours);

 // Percentage of working hours
    console.log( ((weeks * awh) / (weeks * 168) * 100).toFixed(2) + '%' );

    return true;
}
codingHours(6, 17, 52);
