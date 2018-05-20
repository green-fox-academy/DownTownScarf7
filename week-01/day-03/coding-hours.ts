'use strict';

function codingHours(hours: number, weeks: number, awh: number): void {
// Hours spent coding in a semester, percentage of working hours
  console.log(`${weeks * 5 * hours}\n${Math.round((weeks * awh) / (weeks * 168) * 100 * 100) / 100}%`);
}
codingHours(6, 17, 52);
