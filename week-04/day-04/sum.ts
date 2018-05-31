'use strict';

class Sum {
  public sumOfArrElem(arr: number[]): number {
    if (!Array.isArray(arr)) {
      return null;
    }
    let errArr: any[] = [],
        temp: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
      temp += arr[i];
    }
    return temp;
  }
}

export { Sum };
