export{};
'use strict';

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

drinks = drinks.map(element => { element += element; return element;});
console.log(drinks);
