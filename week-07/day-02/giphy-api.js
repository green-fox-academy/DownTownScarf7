'use strict';

const httpRequest = new XMLHttpRequest();

httpRequest.onload = () => {
  let res = JSON.parse(httpRequest.responseText);

  res.data.forEach(elem => {
    document.querySelector('section').appendChild(document.createElement('img')).setAttribute('src', elem.images.fixed_width_still.url);
  });
  document.querySelectorAll('img').forEach((elem, index) => {
    elem.addEventListener('click', () => {
      elem.setAttribute('src', res.data[index].images.fixed_width.url);
    });
  });
  
};
document.querySelector('button').onclick = () => {
  const pictures = document.querySelectorAll('img'),
        tag = document.querySelector('#searchTag').value || 'error',
        limit = document.querySelector('#searchLimit').value || 1;
  if (pictures) {
    pictures.forEach((elem, index) => {
      document.querySelector('section').removeChild(pictures[index]);
    });
  }
  httpRequest.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=FnNNMzbs5Tzy717siUEsfZiKvJfbpgdC&q=${tag}&limit=${limit}&offset=0&rating=G&lang=en`, true);
  httpRequest.send();
}
