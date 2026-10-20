const taskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("task"); // Updated ID to match

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Using event to gather data into an object, grabbing name target
  const task = event.target.elements["new-task-description"].value;
  buildToDo(task);
});

function buildToDo(task) {
  const listItem = document.createElement("li");
  listItem.textContent = task;
  taskList.appendChild(listItem);
}
