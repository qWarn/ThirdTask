import {displayTasks, getFirstTasks} from './tasks.js'

const search = document.getElementById('task-search');
const tasks = document.getElementById('tasks');

search.addEventListener('input', function (event) {
  tasks.innerHTML = "";
  const query = this.value
  if (query === "") {
    getFirstTasks();
  } else {
    fetch(`https://todo.doczilla.pro/api/todos/find?q=${query}`)
      .then((response) => response.json())
      .then((data) => displayTasks(data, data.length))
  }
});
