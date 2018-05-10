'use strict';

// (coding-hours) Calculating...
function codingHours(hours, weeks, awh) {

// Hours spent coding in a semester
  console.log(weeks * 5 * hours);

// Percentage of working hours
  console.log( ((weeks * awh) / (weeks * 168) * 100).toFixed(2) + '%' );

  return true;
}
codingHours(6, 17, 52);
