import {displayTasksByDate} from "./tasks.js";
import {onlyUndone} from "./onlyUndone.js";

const button = document.getElementById("week-tasks");

button.addEventListener("click", event => {
  const curr = new Date;
  const start = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  const end = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));

  displayTasksByDate(start.getTime(), end.getTime(), onlyUndone());
});
