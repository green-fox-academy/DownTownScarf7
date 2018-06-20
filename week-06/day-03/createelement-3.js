'use strict';

const kids = [{ "pet_name": "Wattled crane", "owner": "Bryant" },
              { "pet_name": "Devil, tasmanian", "owner": "Alejandro" },
              { "pet_name": "Mynah, common", "owner": "Nelie" },
              { "pet_name": "Dolphin, common", "owner": "Mariele" },
              { "pet_name": "Gray duiker", "owner": "Maddalena" },
              { "pet_name": "Crab (unidentified)", "owner": "Lucine" },
              { "pet_name": "Ant (unidentified)", "owner": "Lorianna" },
              { "pet_name": "Bison, american", "owner": "Tommie" },
              { "pet_name": "Yellow mongoose", "owner": "Vivyan" },
              { "pet_name": "Carpet snake", "owner": "Veda" },
              { "pet_name": "Lesser mouse lemur", "owner": "Isidor" }];

kids.forEach(elem => {
  const article = document.createElement('article');
  document.querySelector('#pets').appendChild(article);
  article.appendChild(document.createElement('h3')).innerHTML = elem.owner;
  article.appendChild(document.createElement('p')).innerHTML = elem.pet_name;
});
