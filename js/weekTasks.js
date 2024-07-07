import {clearTasks, displayTasks} from "./tasks.js";

const button = document.getElementById("week-tasks");

button.addEventListener("click", event => {
  const curr = new Date;
  const start = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  const end = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));

  clearTasks();
  fetch(`https://todo.doczilla.pro/api/todos/date?from=${start.getMilliseconds()}&to=${end.getMilliseconds()}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      displayTasks(data, data.length);
    })
})
