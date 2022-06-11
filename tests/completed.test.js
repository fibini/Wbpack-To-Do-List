const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const mockHtml = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To Do List</title>
  </head>
  <body>
    <main id="main">
      <section id="to-do-box">
        <div class="to-do">
          <h1>Today's To Do</h1>
          <span class="arrow-rotate"
            ><i class="fa-solid fa-arrows-rotate"></i
          ></span>
        </div>
        <div class="add-list">
          <form id="form" action="#" method="post">
            <input type="text" id="add" placeholder="Add to your list..." />
            <button class="add-button" type="submit">Add</button>
          </form>
        </div>
        <ul id="list-block">
          <!--list produced from javascript-->
          <li class = "list1"><div class="check-input"><input type="checkbox" class="check" id="check1" name="" value="" checked>
          <label id="label1" for="" class="">wash car</label></div>
          <span class="dots">
          <span class="close-task" id="">
            <i class="fa-solid fa-rectangle-xmark"></i>
          </span>
          <span class="edit-task" id="">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </span></li>
        <li class = "list2"><div class="check-input"><input type="checkbox" class="check" id="check2" name="" value="">
        <label id="label1" for="" class=""> take out the trash</label></div>
        <span class="dots">
        <span class="close-task" id="">
          <i class="fa-solid fa-rectangle-xmark"></i>
        </span>
        <span class="edit-task" id="">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </span>
      </span></li>
        </ul>
        <div class="button-block">
          <button class="button" type="submit">Clear all completed</button>
        </div>
      </section>
    </main>
  </body>
</html>
`);
const checkBox = mockHtml.window.document.getElementById('check1');
const lists = [
  {
    description: 'wash car',
    completed: false,
    index: 1,
  },
  {
    description: 'wash dishes',
    completed: true,
    index: 2,
  },
];

const clickfunction = () => {
  if (checkBox.checked) {
    lists[0].completed = true;
  } else {
    lists[0].completed = false;
  }
};

describe('check for completed status', () => {
  test('check for completed task 1', () => {
    clickfunction();
    expect(lists[0].completed).toBeTruthy();
  });
});
