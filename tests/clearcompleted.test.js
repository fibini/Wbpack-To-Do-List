// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

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
  {
    description: 'take out trash',
    completed: true,
    index: 3,
  },
  {
    description: 'play games',
    completed: true,
    index: 4,
  },
];

const clearCompleted = () => {
  const checkDelete = lists.filter((list) => list.completed === false);
  return checkDelete.length;
};
clearCompleted();

describe('Clear completed tasks', () => {
  test('task list before completed items are removed', () => {
    expect(lists.length).toBe(4);
  });
  test('clear tasks that are true', () => {
    expect(clearCompleted()).toBe(1);
  });
});