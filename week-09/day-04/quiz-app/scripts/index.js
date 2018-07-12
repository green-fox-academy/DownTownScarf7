'use strict';

window.onload = () => {
  const site = 'http://localhost:8080/';
  const requestGame = new XMLHttpRequest();

  const getGame = () => {
    requestGame.open('GET', `${site}api/game`);
    requestGame.onload = () => {
      const res = JSON.parse(requestGame.responseText);
      console.log(res);
      document.querySelector('#question').innerText = res.question;
      res.answers.forEach(element => {
        const btn = document.createElement('button');
        btn.classList.add('btn', 'answer');
        btn.innerText = element.answer;
        btn.dataset.isCorrect = element.is_correct;
        document.querySelector('#answer-container').appendChild(btn);
      });
  }
  requestGame.send();
  }

  document.querySelector('#answer-container').addEventListener('click', event => {
    if (event.target.classList.contains('btn')) {
      document.querySelector('#score').innerText = event.target.dataset.isCorrect === '1' ? +document.querySelector('#score').innerText + 1 : +document.querySelector('#score').innerText - 1;
      event.target.classList.add('selected');
      document.querySelectorAll('.btn.answer').forEach(btn => {
        btn.setAttribute('disabled', null);
        btn.classList.add(btn.dataset.isCorrect === '1' ? 'correct' : 'wrong');
      });
      setTimeout(() => {
        document.querySelector('#answer-container').innerHTML = null;
        getGame();
      }, 3000);
    }
  });

  getGame();
  
}
