import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Storage from '../modules/Storage.js';

const updateList = () => {
  const lists = new Storage().getStorage();
  document.getElementById('list-block').innerHTML = '';
  lists.forEach((list) => {
    let classes = 'task-description';
    let checked = '';
    if (list.completed) {
      classes = 'task-description active';
      checked = 'checked';
    }
    const card = `
    <li class = "list"><div class="check-input"><input type="checkbox" class="check" id="${list.index}" name="${list.index}" value="${list.index}"${checked}>
        <label id="label${list.index}" for="${list.index}" class="${classes}">${list.description}</label></div>
        <span class="dots">
        <span class="close-task" id="${list.index}">
          <i class="fa-solid fa-rectangle-xmark"></i>
        </span>
        <span class="edit-task" id="${list.index}">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </span>
      </span></li>`;
    document.getElementById('list-block').innerHTML += card;
  });

  const removeTasks = document.querySelectorAll('.close-task');
  const editTasks = document.querySelectorAll('.edit-task');
  const checkBoxes = document.querySelectorAll('.check');

  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', (e) => {
      e.preventDefault();
      const check = checkBox.getAttribute('id') * 1;
      const localStorage = new Storage();
      const lists = localStorage.getStorage();
      if (checkBox.checked) {
        lists[check - 1].completed = true;
      } else {
        lists[check - 1].completed = false;
      }
      localStorage.localStorage(lists);
      updateList();
    });
  });

  editTasks.forEach((editTask) => {
    editTask.addEventListener('click', (e) => {
      e.preventDefault();
      const localStorage = new Storage();
      const lists = localStorage.getStorage();
      const task = editTask.getAttribute('id') * 1 - 1;
      const newTask = prompt('Change task');
      lists[task].description = newTask;
      localStorage.localStorage(lists);
      updateList();
    });
  });

  removeTasks.forEach((removeTask) => {
    removeTask.addEventListener('click', (e) => {
      e.preventDefault();
      const localStorage = new Storage();
      const index = removeTask.getAttribute('id') * 1 - 1;
      const lists = localStorage.getStorage();
      const taskDelete = lists.filter((item, key) => {
        if (key !== index) {
          return true;
        }
        return null;
      });
      for (let i = 0; i < taskDelete.length; i += 1) {
        taskDelete[i].index = i + 1;
      }
      localStorage.localStorage(taskDelete);
      updateList();
    });
  });
};
updateList();

const lists = [];
lists.sort((a, b) => a.index - b.index);

const AddtoList = document.querySelector('.add-button');

AddtoList.addEventListener('click', (e) => {
  e.preventDefault();
  const localStorage = new Storage();
  const lists = localStorage.getStorage();
  const lastIndex = lists.length + 1;
  lists.push({
    description: document.getElementById('add').value,
    completed: false,
    index: lastIndex,
  });
  localStorage.localStorage(lists);
  document.getElementById('add').value = '';
  updateList();
});

const clearCompleted = document.querySelector('.button');

clearCompleted.addEventListener('click', (e) => {
  e.preventDefault();
  const localStorage = new Storage();
  const lists = localStorage.getStorage();
  const checkDelete = lists.filter((lists) => lists.completed === false);
  for (let i = 0; i < checkDelete.length; i += 1) {
    checkDelete[i].index = i + 1;
  }
  localStorage.localStorage(checkDelete);
  updateList();
});
