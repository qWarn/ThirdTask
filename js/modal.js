export function openModalWindow(event) {
  const task = event.currentTarget;
  const elements = task.getElementsByTagName("*");

  document.getElementById('modal-title').innerText = elements[0].textContent;
  document.getElementById('modal-date').innerText = elements[3].textContent;
  document.getElementById('modal-description').innerText = elements[4].textContent;

  document.getElementById('modal').style.display = 'block';
}

export function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}

document.getElementById("close-modal").addEventListener("click", event => {
  closeModal();
})
