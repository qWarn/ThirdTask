import {clearTasks, displayTasks, getFirstTasks} from './tasks.js'

const search = document.getElementById('task-search');

search.addEventListener('input', function (event) {
  clearTasks();

  const query = this.value
  if (query === "") {
    getFirstTasks();
  } else {
    fetch(`https://todo.doczilla.pro/api/todos/find?q=${query}`)
      .then((response) => response.json())
      .then((data) => displayTasks(data, data.length))
  }
});
