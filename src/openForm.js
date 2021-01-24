const addTask = document.getElementById("add");
const popUp = document.getElementById("form-container");
const overlay = document.getElementById("overlay");

addTask.addEventListener("click", () => {
  popUp.style.display = "block";
});

overlay.addEventListener("click", () => {
  popUp.style.display = "none";
});

export default addTask;
