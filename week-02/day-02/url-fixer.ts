export{};
'use strict';

// Fucking seriously...?
let url:string = 'https//www.reddit.com/r/nevertellmethebots';
function fuckThis(shittyUrl) {
  let dankUrl = url.slice(url.indexOf('www'), url.indexOf('/r/') + 3)
  return `https://${dankUrl}dankmemes/`;
}

console.log(fuckThis(url));
