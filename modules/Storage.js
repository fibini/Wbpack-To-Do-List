export default class Storage {
    localStorage = (lists) => {
      localStorage.setItem('task', JSON.stringify(lists));
    }

    getStorage = () => {
      const getTask = JSON.parse(localStorage.getItem('task'));
      if (getTask) {
        return getTask;
      }
      return [];
    }
}