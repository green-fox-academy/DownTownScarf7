'use strict';

const httpRequest = new XMLHttpRequest();

httpRequest.onload = () => {
  let res = JSON.parse(httpRequest.responseText);

  res.data.forEach(elem => {
    document.querySelector('section').appendChild(document.createElement('img')).setAttribute('src', elem.images.original_still.url);
  });
  document.querySelectorAll('img').forEach((elem, index) => {
    elem.addEventListener('click', () => {
      elem.setAttribute('src', res.data[index].images.original.url);
    });
  });
  
};
document.querySelector('button').onclick = () => {
  document.querySelector('button').setAttribute('disabled', null);
  httpRequest.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=FnNNMzbs5Tzy717siUEsfZiKvJfbpgdC&q=${document.querySelector('input').value ? document.querySelector('input').value : 'ERROR'}&limit=16&offset=0&rating=G&lang=en`, true);
  httpRequest.send();
}
