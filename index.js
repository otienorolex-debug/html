const taskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = event.target.elements["new-task-description"].value;
  buildToDo(task);
});

function buildToDo(task) {
  const listItem = document.createElement("li");
  listItem.textContent = task;
  taskList.appendChild(listItem);
}