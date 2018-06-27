'use strict';

const http = new XMLHttpRequest(),
  btn = document.querySelector('#switch'),
  mainDiv = document.querySelector("#main");
let task = 0;

http.onload = () => {
  const res = JSON.parse(http.responseText).book_data;
  if (task === 1) {
    const ul = document.createElement('ul');
    mainDiv.appendChild(ul);
    res.forEach(elem => {
      ul.appendChild(document.createElement('li')).innerHTML = elem.book_name;
    });
  } else if (task === 2) {
    const table = document.createElement('table'),
      trTitle = document.createElement('tr');
    mainDiv.appendChild(table);
    table.appendChild(trTitle);
    res.forEach(elem => {
      const tr = document.createElement('tr'),
        counter = document.querySelectorAll('.thTitle');
      table.appendChild(tr);
      for (let i in elem) {
        if (counter.length < 4) {
          const thTitle = document.createElement('th');
          thTitle.classList.add('thTitle');
          trTitle.appendChild(thTitle).innerHTML = i;
        }
        tr.appendChild(document.createElement('th')).innerHTML = elem[i];
      }
    });
  }
}

btn.onclick = () => {
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
  
  task < 2 ? task++ : task = 1;
  switch(task) {
    case 1:
      http.open('GET', 'http://localhost:3000/api', true);
      break;
    case 2:
      http.open('GET', 'http://localhost:3000/api?task=2', true);
      break;
  }
  http.send();
}
