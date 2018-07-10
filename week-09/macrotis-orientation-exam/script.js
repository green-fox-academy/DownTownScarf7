'use strict';

const http = new XMLHttpRequest();

window.onload = () => {
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
      const table = document.querySelector('table');
      res.forEach(element => {
        const row = document.createElement('tr');
        row.appendChild(document.createElement('td'));
      });
    }
    console.log(res);
  }
  http.send();
}
