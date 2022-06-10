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

const lists = [];
lists.sort((a, b) => a.index - b.index);

const updateList = () => {
  mockHtml.window.document.getElementById("list-block").innerHTML = "";
  lists.forEach((list) => {
    let classes = "task-description";
    let checked = "";
    if (list.completed) {
      classes = "task-description active";
      checked = "checked";
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
    mockHtml.window.document.getElementById("list-block").innerHTML += card;
  });
};
updateList();

const AddtoList = () => {
  const lastIndex = lists.length + 1;
  lists.push({
    description: mockHtml.window.document.getElementById("add").value,
    completed: false,
    index: lastIndex,
  });
  mockHtml.window.document.getElementById("add").value = "";
  updateList();
};
AddtoList();

describe("Added to list", () => {
  test("Add new task to list", () => {
    expect((lists[0].description = "hello")).toBe("hello");
  });

  test("Added item is false", () => {
    expect(lists[0].completed).toBe(false);
  });

  test("list has been added to html", () => {
    expect(mockHtml.window.document.querySelector(".list")).toBeTruthy();
  });
});


