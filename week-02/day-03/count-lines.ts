export{};
'use strict';

declare function require(path:string):any;
function lineCount(filePath:string):void{
  const fs = require('fs');
  try{
    let f:string = fs.readFileSync(filePath, 'utf-8');
    let fArr:string[] = f.split(`\r\n`);
    console.log(fArr.length);
  }
  catch(e){
    console.log('ERROR: File not found!');
  }
}
lineCount('count-lines.txt');
