const task = Array.from(document.getElementsByClassName("task"));

task.forEach((oneTask) => {
  oneTask.addEventListener("dblclick", () => {
    oneTask.classList.toggle("full");
  });
});

export default task;
