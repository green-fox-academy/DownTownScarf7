'use strict';

const http = new XMLHttpRequest();
let attrId = null;

window.onload = () => {
  // Edit buttons onclick events
  document.querySelector('table').addEventListener('click', event => {
    if (event.target.classList.contains('btn')) {
      attrId = event.target.dataset.id;
      const http2 = new XMLHttpRequest();
      http2.open('GET', `http://localhost:3000/api/attractions/${event.target.dataset.id}`);
      http2.setRequestHeader("Content-Type", "application/json");
      http2.onload = () => {
        const { attr_name, city, price, longitude, lattitude, category, duration, recommended_age } = JSON.parse(http.responseText).attractions[0];
        [attr_name, city, price, longitude, lattitude, category, duration, recommended_age].forEach((element, index) => {
          document.querySelectorAll('input')[index].value = element;
        });
      }
      http2.send();
    }
  });

  // Submit button onlick event
  document.querySelector('#submit').addEventListener('click', event => {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    http.open('POST', `http://localhost:3000/api/add`);
    http.setRequestHeader("Content-Type", "application/json");
    if (attrId) {
      http.send(JSON.stringify({
        id: attrId,
        name: inputs[0].value,
        city: inputs[1].value,
        price: inputs[2].value,
        longitude: inputs[3].value,
        lattitude: inputs[4].value,
        category: inputs[5].value,
        duration: inputs[6].value,
        recommended_age: inputs[7].value,
      }));
    } else {
      http.send(JSON.stringify({
        name: inputs[0].value,
        city: inputs[1].value,
        price: inputs[2].value,
        longitude: inputs[3].value,
        lattitude: inputs[4].value,
        category: inputs[5].value,
        duration: inputs[6].value,
        recommended_age: inputs[7].value,
      }));
    }
    location.reload();
  });

  //
  http.open('GET', 'http://localhost:3000/api/attractions', true);
  http.setRequestHeader("Content-Type", "application/json");
  http.onload = () => {
    let res = null;
    try {
      res = JSON.parse(http.responseText).attractions;
    }
    catch (err) {
      console.log(err);
      return;
    }
    if (res) {
      res.forEach(element => {
        const { id, attr_name, city, price, longitude, lattitude, category, duration, recommended_age } = element;
        const tr = document.createElement('tr');
        const btnEdit = document.createElement('button');
        btnEdit.dataset.id = (id);
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
