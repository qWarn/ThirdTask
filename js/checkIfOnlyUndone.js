document.addEventListener("change", checkIfOnlyUndone);

export function checkIfOnlyUndone() {
  const checkbox = document.getElementById("not-done-tasks");

    const taskContainer = document.getElementById("tasks");
    let tasks = Array.from(taskContainer.getElementsByClassName('task'));

    if (checkbox.checked) {
      tasks.forEach(task => {
        if (task.querySelector(".task-status").checked) {
          task.style.display = 'none';
        }
      })
    } else {
      tasks.map(task => task.style.display = "flex")
    }
}
