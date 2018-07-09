'use strict';

const Sharpie = (color, width) => {
  return {
    color: color,
    width: width,
    inkAmount: 100,
    use: function () {
      this.inkAmount -= this.width;
    }
  }
}

const blueSharpie = Sharpie('red', 5);

while (blueSharpie.inkAmount >= blueSharpie.width) {
  blueSharpie.use();
  console.log(blueSharpie.inkAmount);
}
