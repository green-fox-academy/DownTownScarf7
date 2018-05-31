'use strict';

export function anagram(str: string, ana: string): boolean {
  let temp: string = '',
      words: string[] = str.split(' ');
  for (let i in words) {
    temp += words[i][0];
  }
  return temp.toUpperCase() === ana.toUpperCase();
}
