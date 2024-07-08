import {clearTasks, displayTasks, displayAllTasks} from './tasks.js'

const search = document.getElementById('task-search');

search.addEventListener('input', function (event) {
  clearTasks();

  const query = this.value;
  if (query === "") {
    displayAllTasks();
  } else {
    fetch(`http://localhost:8080/api/todos/find?q=${query}`)
      .then((response) => response.json())
      .then((data) => displayTasks(data, data.length));
  }
});
