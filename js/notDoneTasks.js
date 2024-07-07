export function getStatus() {
  const checkbox = document.getElementById("not-done-tasks");
  if (checkbox.checked) {
    return false
  }
}
