'use strict';

const http = new XMLHttpRequest(),
  btn = document.querySelector('#switch'),
  mainDiv = document.querySelector("#main");
let task = 0;

http.onload = () => {
  const res = JSON.parse(http.responseText).book_data;
  console.log(res);
  if (task === 1) {
    const ul = document.createElement('ul');
    mainDiv.appendChild(ul);
    res.forEach(elem => {
      ul.appendChild(document.createElement('li')).innerHTML = elem.book_name;
    });
  } else if (task === 2) {
    const table = document.createElement('table');
    mainDiv.appendChild(table);
    res.forEach(elem => {
      const tr = document.createElement('tr');
      table.appendChild(tr);
      for (let i in elem) {
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
