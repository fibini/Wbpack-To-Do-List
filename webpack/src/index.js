import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const lists = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 4,
  },
  {
    description: 'take out the trash',
    completed: false,
    index: 3,
  },
  {
    description: 'complete to do list',
    completed: false,
    index: 2,
  },
  {
    description: 'wash the car',
    completed: false,
    index: 1,
  },
];

lists.sort((a, b) => a.index - b.index);

lists.forEach((list) => {
  for (let i = 0; i < lists.length; i += 1) {
    if (lists[i] === lists.index) {
      return;
    }
  }
  const card = `
    <li class = "list"><div class="check-input"><input type="checkbox" id="${list.index}" name="${list.index}" value="${list.index}">
        <label for="${list.index}">${list.description}</label></div>
        <span class="dots">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </span></li>`;
  document.getElementById('list-block').innerHTML += card;
});
