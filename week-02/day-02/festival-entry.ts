export{};
'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(list:any[]):any[]{
  let temp:any[] = [];
  list.forEach(elem => {
    if (elem.guns > 0) {
      watchlist.push(elem.name);
    } else if (elem.alcohol > 0) {
      securityAlcoholLoot += elem.alcohol;
      elem.alcohol = 0;
      temp.push(elem.name);
    } else {
      temp.push(elem.name);
    }
  });
  return temp;
}

console.log(securityCheck(queue));

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival
// export = securityCheck;
