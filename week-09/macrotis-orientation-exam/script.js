'use strict';

const http = new XMLHttpRequest();

window.onload = () => {
  document.querySelector('table').addEventListener('click', event => {
    if (event.target.classList.contains('btn')) {
      http.open('GET', `http://localhost:3000/api/attractions/${event.target.dataset.id}`);
      http.onload = () => {
        const { attr_name, city, price, longitude, lattitude, category, duration, recommended_age } = JSON.parse(http.responseText).attractions[0];
        [attr_name, city, price, longitude, lattitude, category, duration, recommended_age].forEach((element, index) => {
          document.querySelectorAll('input')[index].value = element;
        });
      }
      http.send();
    }
  });
  
  http.open('GET', 'http://localhost:3000/api/attractions', true);
  http.setRequestHeader("Content-Type", "application/json");
  http.onload = () => {
    let res = null;
    try {
      res = JSON.parse(http.responseText).attractions;
    }
    catch (err) {
      console.error(err);
      return;
    }
    if (res) {
      res.forEach((element, index) => {
        const { attr_name, city, price, longitude, lattitude, category, duration, recommended_age } = element;
        const tr = document.createElement('tr');
        const btnEdit = document.createElement('button');
        btnEdit.dataset.id = (index + 1);
        btnEdit.classList.add('btn', 'edit');
        btnEdit.innerHTML = 'Edit';
        document.querySelector('tbody').appendChild(tr);
        [attr_name, city, price, longitude, lattitude, category, duration, recommended_age].forEach(attr => {
          tr.appendChild(document.createElement('td')).innerHTML = attr;
        });
        tr.appendChild(btnEdit);
      });
    }
  }
  http.send();
}
