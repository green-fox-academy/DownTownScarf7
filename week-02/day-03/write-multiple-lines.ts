export{};
'use strict';

declare function require(path:string):any;

function bombFile(path:string, data:string, num:number = 1):void{
  // defining variables
  let befSize:number = -1, aftSize:number = 0;
  const fs = require('fs');
  // get starting stats
  if (fs.existsSync(path)){
    try{
      const stats = fs.statSync(path);
      befSize = stats.size;
    }
    catch(err){
      console.log('Recon offline!');
    }
  }
  console.log('Target acquired!');
  // prepare string bomb
  for (let i = 0; i <= num; i++){
    data += `\n${data}`;
  }
  // write string to file
  try{
    fs.appendFileSync(path, data);
    console.log('Target hit!');
    // get after stats
    try{
      const stats = fs.statSync(path);
      aftSize = stats.size;
    }
    catch(err){
      console.log('Lost visual!');
    }
  }
  catch(err){
    console.log('MAYDAY! MAYDAY! SOMETHING WENT WRONG!');
  }
  // get size difference
  if (befSize){
    console.log(`Target gained ${aftSize - befSize} bytes!`);
  } else {
    console.log(`Target gained ${aftSize} bytes!`);
  }
}
bombFile('write-multiple-lines.txt', 'All work and no play makes Jacky a dull boy.', 5);
