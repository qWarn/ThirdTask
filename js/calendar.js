import {clearTasks, displayTasksByDate} from "./tasks.js";

const firstCalendar = document.getElementById("start-date");
const secondCalendar = document.getElementById("end-date");

firstCalendar.addEventListener("change", event => {
  handleCalendarChange();
})

secondCalendar.addEventListener("change", event => {
  handleCalendarChange();
})

function handleCalendarChange() {
  const start = firstCalendar.value;
  const end = secondCalendar.value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (startDate.getTime() > endDate.getTime()) {
    clearTasks();
  }

  if (start !== "" && end === "") {
    displayTasksByDate(startDate.setHours(0, 0, 0, 0), startDate.setHours(23, 59, 59, 999))
  }

  if (start !== "" && end !== "") {
    displayTasksByDate(startDate.setHours(0, 0, 0, 0), endDate.setHours(0, 0, 0, 0))
  }
}
