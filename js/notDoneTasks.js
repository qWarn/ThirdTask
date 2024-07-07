import {displayTasks, getFirstTasks} from "./tasks.js";

const checkbox = document.getElementById("not-done-tasks");

checkbox.addEventListener("change", event => {
    document.getElementById("tasks").innerHTML = "";
    if (checkbox.checked) {
      fetch(`https://todo.doczilla.pro/api/todos/date?from=0&to=${Date.now()}&status=false`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          displayTasks(data, data.length);
        })
    } else {
      getFirstTasks();
    }
  }
);
