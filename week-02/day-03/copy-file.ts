export { };
'use strict';

declare function require(path: string): any;

function copyFile(fromFile: string, toFile: string): boolean {
  const fs = require('fs');
  try {
    fs.createReadStream(fromFile).pipe(fs.createWriteStream(toFile));
    return true;
  }
  catch{
    return false;
  }
}
if (copyFile('copy-file-from.txt', 'copy-file-to.txt')) {
  console.log('Done!');
} else {
  console.log('Fuck!');
}
