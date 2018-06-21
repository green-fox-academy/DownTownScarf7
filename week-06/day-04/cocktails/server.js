'use strict';

const app = require('express')(),
      PORT = 3000,
      alcoholList = ['gin', 'vodka', 'rum', 'tequila'],
      cocktails = [
        { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
        { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
        { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
        { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
        { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
        { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
        { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
        { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
      ];
let check = false,
    temp = [];

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  temp = [];
  if (alcoholList.indexOf(req.query.alcohol) !== -1) {
    cocktails.forEach(elem => {
      if (elem.contains.indexOf(req.query.alcohol) !== -1) {
        temp.push(elem);
      }
    });
    check = false;
  } else if (!req.query.alcohol) {
    temp = cocktails;
    check = false;
  } else {
    check = true;
  }
  res.render('home', {
    temp,
    check,
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
