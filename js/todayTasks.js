import {displayTasksByDate} from "./tasks.js";
import {onlyUndone} from "./onlyUndone.js";

const button = document.getElementById("today-tasks");

button.addEventListener("click", event => {
  const start = new Date(new Date().setHours(0, 0, 0, 0));
  const end = new Date(new Date().setHours(23, 59, 59, 999));

  displayTasksByDate(start.getTime(), end.getTime(), onlyUndone());
});
