export{};
'use strict';

declare function require(path:string):any;

function writeLine(fileName:string, data:string):void{
  const fs = require('fs');
  try{
    if (fs.existsSync(fileName)){
      fs.appendFileSync(fileName, `\n${data}`);
    } else {
      fs.appendFileSync(fileName, data);
    }
    console.log(`Successfully written line "${data}" into "${fileName}"`);
  }
  catch(err){
    console.log(err);
  }
}
writeLine('write-single-line.txt','DownTownScarf7');
