import {openModalWindow} from "./modal.js";
import {checkIfOnlyUndone} from "./checkIfOnlyUndone.js";

export function displayAllTasks() {
  fetch("https://todo.doczilla.pro/api/todos")
    .then((response) => response.json())
    .then(data => displayTasks(data, data.length));
}

export function displayTasksByDate(start, end) {
  fetch(`https://todo.doczilla.pro/api/todos/date?from=${start}&to=${end}`)
    .then(response => response.json())
    .then(data => displayTasks(data, data.length));
}

export function clearTasks() {
  document.getElementById("tasks").innerHTML = "";
}

export function displayTasks(data, limit) {
  clearTasks();

  const tasks = document.getElementById("tasks");

  for (let i = 0; i < limit; i++) {
    const task = document.createElement("div");
    task.className = "task";
    task.id = data[i].id;

    const name = document.createElement("h2");
    name.className = "task-name";
    name.textContent = data[i].name;

    const shortDesc = document.createElement("p");
    shortDesc.className = "task-short-desc";
    shortDesc.textContent = data[i].shortDesc;

    const fullDesc = document.createElement("p");
    fullDesc.className = "task-full-desc";
    fullDesc.hidden = true;
    fullDesc.textContent = data[i].fullDesc;

    const status = document.createElement("input");
    status.className = "task-status";
    status.type = "checkbox";
    status.checked = data[i].status;


    const date = document.createElement("p");
    date.className = "task-date"
    date.textContent = new Date(data[i].date).toLocaleString();
    task.onclick = openModalWindow;

    task.append(name, shortDesc, status, date, fullDesc)
    tasks.appendChild(task);
  }

  checkIfOnlyUndone();
}

displayAllTasks();
