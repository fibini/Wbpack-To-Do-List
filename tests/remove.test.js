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
            <li class ="list1"><div class="check-input"><input type="checkbox" class="check" id="check1" name="" value="">
            <label id="label" for="" class=""></label></div>
            <span class="dots">
            <span class="close-task" id="">
            <i class="fa-solid fa-rectangle-xmark"></i>
            </span>
            <span class="edit-task" id="">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </span>
            </span></li>
            <li class ="list2"><div class="check-input"><input type="checkbox" class="check" id="check2" name="" value="">
            <label id="label2" for="" class=""></label></div>
            <span class="dots">
            <span class="close-task" id="">
            <i class="fa-solid fa-rectangle-xmark"></i>
            </span>
            <span class="edit-task" id="">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </span>
            </span></li>
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

 const index = mockHtml.window.document.getElementById("check1");
 const removes = (index) => {
     index.parentElement.parentElement.remove()
 }



describe("Remove from list", () => {
  test("is task removing from html", () => {
      removes(index)
    expect(mockHtml.window.document.querySelector(".list1")).toBeFalsy();
  });

  test('is function removing the correct task', () => {
      removes(index)
      expect(mockHtml.window.document.querySelector(".list2")).toBeTruthy()
  })
});
