'use strict';

declare function require(path:string):any;

const fs = require('fs');
try{
  let f = fs.readFileSync('my-file.txt', 'utf-8');
  console.log(f);
}
catch(e){
  console.log('Unable to read file: my-file.txt');
}
