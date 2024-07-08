import {clearTasks} from "./tasks.js";

document.getElementById("sort-tasks")
  .addEventListener("click", event => {
    const taskContainer = document.getElementById("tasks");
    const tasks = Array.from(document.getElementsByClassName("task"));

    clearTasks();

    tasks.sort((task1, task2) => getDate(task1) - getDate(task2));
    tasks.forEach(task => taskContainer.appendChild(task))
  })

function getDate(task) {
  const dateString = task.querySelector(".task-date").textContent;

  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('.').map(Number);
  const [hours, minutes] = timePart.split(':').map(Number);

  return new Date(year, month - 1, day, hours, minutes);
}
