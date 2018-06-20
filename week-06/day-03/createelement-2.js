'use strict';

const list = document.querySelector('.asteroids');

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

list.querySelector('li').remove();
planetData.forEach(elem => {
  if (elem.asteroid) {
    const li = document.createElement('li');
    list.appendChild(li).innerHTML = elem.content;
    li.className = elem.category;
  }
});
