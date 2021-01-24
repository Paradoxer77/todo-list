const form = document.getElementById("input");
const tasks = document.getElementById("tasks");
const title = document.getElementById("task-title");
const dueDate = document.getElementById("task-due-date");
const priority = document.getElementsByName("priority");
let taskPriority;

const button = document.getElementById("task-add");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let values = getValue();
  updateDisplay(values);
});

function getValue() {
  let taskTitle = title.value;
  let taskDueDate = dueDate.value;
  if (priority[0].checked) {
    taskPriority = "high";
  } else if (priority[1].checked) {
    taskPriority = "medium";
  } else {
    taskPriority = "low";
  }
  return [taskTitle, taskDueDate, taskPriority];
}

function updateDisplay(values) {
  let spans = [];
  for (let i = 0; i < 6; i++) {
    spans.push(document.createElement("span"));
  }

  let task = document.createElement("div");

  spans[0].textContent = 2;
  spans[1].textContent = values[0];
  spans[2].textContent = values[2];
  spans[3].textContent = values[1];
  spans[4].innerHTML =
    '<i class="fas fa-edit edit" id="edit"></i>&nbsp;&nbsp;&nbsp;<i class="fas fa-trash-alt edit" id="delete"></i>';

  spans.forEach((span) => {
    createDOM(span, task, "");
  });

  createDOM(task, tasks, "task");
}

function createDOM(element, parent, className) {
  if (className) {
    element.classList.add(className);
  }
  parent.appendChild(element);
}

export default button;
