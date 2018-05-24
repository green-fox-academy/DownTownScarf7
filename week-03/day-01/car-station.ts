export{};
'use strict';

import { Car } from './car';
import { Station } from './station';

let car: Car = new Car();
let station: Station = new Station();

console.log(`Gas needed: ${car.getRefillSize()}`);
station.refill(car);
console.log(`Gas needed: ${car.getRefillSize()}`);
