const jsdom = require("jsdom");
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
        </ul>
        <div class="button-block">
          <button class="button" type="submit">Clear all completed</button>
        </div>
      </section>
    </main>
  </body>
</html>
`);

class MockLocalStorage {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new MockLocalStorage();

const lists = [];
lists.sort((a, b) => a.index - b.index);

const AddtoList = () => {
  const lastIndex = lists.length + 1;
  lists.push({
    description: mockHtml.window.document.getElementById("add").value,
    completed: false,
    index: lastIndex,
  });
  mockHtml.window.document.getElementById("add").value = "";
};
AddtoList();

const prompt = () => {
  let task = "hello";
  return task;
};

const editTask = () => {
  const localStorage = new MockLocalStorage();
  const newTask = prompt("Change task");
  lists[0].description = newTask;
  localStorage.setItem(lists);
};

describe("Edit Task", () => {
  test("list has Task", () => {
    editTask();
    expect(lists[0].description).toBe("hello");
  });

  test("task description has not been changed", () => {
    editTask();
    expect(lists[0].description.length).toBe(5);
  });
});
