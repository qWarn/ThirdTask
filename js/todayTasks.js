import {clearTasks, displayTasks} from "./tasks.js";

const button = document.getElementById("today-tasks");

button.addEventListener("click", event => {
    const start = new Date(new Date().setHours(0, 0, 0, 0))
    const end = new Date(new Date().setHours(23, 59, 59, 999))

    clearTasks();
    fetch(`https://todo.doczilla.pro/api/todos/date?from=${start.getMilliseconds()}&to=${end.getMilliseconds()}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        displayTasks(data, data.length);
      })
  }
);
