'use strict';

let candyCount = 0,
  lollypop = 0,
  candyRain = false;

// I know 10 lollypops should generate 1 candy but it's so slow anyway that I'll just stick with this
function candyTick() {
  candyRain ? candyCount += 10 : candyCount++;
  document.querySelector('.candies').innerHTML = candyCount;
}

document.querySelector('body').addEventListener('click', (event) => {
  switch (event.target.className) {
    case 'create-candies':
      candyCount++;
      break;
    case 'buy-lollypops':
      if (candyCount >= 100) {
        candyCount -= 100;
        lollypop++;
        document.querySelector('.lollypops').innerHTML += '🍭';
        setInterval(candyTick, 1000);
      }
      break;
    case 'candy-machine':
      candyRain = !candyRain;
      break;
  }
  document.querySelector('.candies').innerHTML = candyCount;
  document.querySelector('.speed').innerHTML = lollypop * (candyRain ? 10 : 1);
});
