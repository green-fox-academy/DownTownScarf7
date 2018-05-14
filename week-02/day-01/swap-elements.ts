export{};
'use strict';

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];
console.log(abc);

abc.unshift(abc.pop());
abc.push(abc[1]);
abc.splice(1, 1);
console.log(abc);

abc = ['Arthur', 'Boe', 'Chloe'];
console.log(abc);
abc = [abc[2], abc[1], abc[0]];
console.log(abc);
