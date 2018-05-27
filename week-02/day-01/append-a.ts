export{};
'use strict';

let animals: string[] = ['kuty', 'macs', 'cic'];

animals = animals.map(element => {
  element += 'a';
  return element;
});
console.log(animals);
