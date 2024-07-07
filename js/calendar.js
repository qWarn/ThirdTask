import {displayTasksByDate} from "./tasks.js";
import {onlyUndone} from "./onlyUndone.js";

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

  if (start !== "" && end === "") {
    displayTasksByDate(new Date(start).setHours(0, 0, 0, 0), new Date(start).setHours(23, 59, 59, 999), onlyUndone())
  }

  if (start !== "" && end !== "") {
    displayTasksByDate(new Date(start).setHours(0, 0, 0, 0), new Date(end).setHours(0, 0, 0, 0), onlyUndone())
  }
}
