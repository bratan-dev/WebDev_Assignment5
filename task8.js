const tasks = [];
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  tasks.push({ text: taskText, completed: false });
  taskInput.value = "";
  showTasks();
});

function showTasks() {
  taskList.textContent = "";

  tasks.forEach(function (task, index) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const taskText = document.createElement("span");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;
      showTasks();
    });

    taskText.textContent = task.text;
    if (task.completed) {
      taskText.classList.add("completed");
    }

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      tasks.splice(index, 1);
      showTasks();
    });

    listItem.append(checkbox, taskText, deleteButton);
    taskList.appendChild(listItem);
  });
}
