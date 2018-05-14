export{};
'use strict';

function matrix(subCount): number[][] {
  let mainArr: number[][] = new Array(subCount);
  for (let i = 0; i <= subCount; i++) {
    mainArr[i] = new Array(subCount);
//    mainArr[i] = mainArr[i].map(element => { element = 0; return element;});
    for (let j = 0; j <= subCount; j++) {
      if (subCount - j == i) {
        mainArr[i][j] = 1;
      } else {
        mainArr[i][j] = 0;
      }
    }
  };
  return mainArr;
};
console.log(matrix(10));
