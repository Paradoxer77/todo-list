const projects = document.querySelector(".projects");
const project = document.getElementById("proj");
const projectName = document.getElementById("proj-name");

projects.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let span = document.createElement("span");

    if (projectName.value.trim() !== "") {
      span.classList.add("project");
      span.textContent = projectName.value;

      projectName.value = "";
      projects.appendChild(span);
    }
  }
});

export default project;
