'use strict';

const http = new XMLHttpRequest();
let attrId = null;

window.onload = () => {
  const removeSelected = () => {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
  }
  // Edit buttons onclick events
  document.querySelector('table').addEventListener('click', event => {
    if (event.target.classList.contains('btn')) {
      removeSelected();
      event.target.parentNode.classList.add('selected');
      attrId = event.target.dataset.id;
      const http2 = new XMLHttpRequest();
      http2.open('GET', `http://localhost:3000/api/attractions/${event.target.dataset.id}`);
      http2.setRequestHeader("Content-Type", "application/json");
      http2.onload = () => {
        const { attr_name, city, price, longitude, lattitude, category, duration, recommended_age } = JSON.parse(http2.responseText).attractions[0];
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
      http.onload = () => {
        console.log(http.responseText);
        const tr = document.querySelector(`[data-id="${attrId}"]`).parentNode;
        tr.innerHTML = '';
        const btnEdit = document.createElement('button');
        btnEdit.dataset.id = (JSON.parse(http.responseText).id);
        btnEdit.classList.add('btn', 'edit');
        btnEdit.innerHTML = 'Edit';
        [inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value, inputs[5].value, inputs[6].value, inputs[7].value].forEach(attr => {
          tr.appendChild(document.createElement('td')).innerHTML = attr;
        });
        tr.appendChild(btnEdit);
      }
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
      http.onload = () => {
        const tr = document.createElement('tr');
        const btnEdit = document.createElement('button');
        btnEdit.dataset.id = (JSON.parse(http.responseText).id);
        btnEdit.classList.add('btn', 'edit');
        btnEdit.innerHTML = 'Edit';
        document.querySelector('tbody').appendChild(tr);
        [inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value, inputs[5].value, inputs[6].value, inputs[7].value].forEach(attr => {
          tr.appendChild(document.createElement('td')).innerHTML = attr;
        });
        tr.appendChild(btnEdit);
      }
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
  });

  document.querySelector('#cancel').addEventListener('click', event => {
    removeSelected();
    document.querySelectorAll('label').forEach(element => {
      element.childNodes[1].value = '';
    });
    attrId = null;
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
