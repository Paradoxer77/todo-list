const form = document.getElementById("input");
const title = document.getElementById("task-title");
const dueDate = document.getElementById("task-due-date");

const button = document.getElementById("task-add");

button.addEventListener("click", (e) => {
  e.preventDefault();
});

export default button;
