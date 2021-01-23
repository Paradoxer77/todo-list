const addTask = document.getElementById("add-task");
const projects = document.querySelector(".projects");
const project = document.getElementById("proj");
const projectName = document.getElementById("proj-/name");

addTask.addEventListener("click", () => {
  // project.classList.add("visible");
  project.classList.toggle("visible");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

export { addTask, project };
