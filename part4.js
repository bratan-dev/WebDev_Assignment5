const tasks = [];
let nextTaskId = 1;

const taskForm = document.querySelector("#todo-form");
const taskInput = document.querySelector("#task-input");
const todoList = document.querySelector("#todo-list");
const todoCount = document.querySelector("#todo-count");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  tasks.push({ id: nextTaskId, text: taskText, completed: false });
  nextTaskId += 1;
  taskInput.value = "";
  taskInput.focus();
  renderTasks();
});

todoList.addEventListener("change", (event) => {
  if (event.target.matches("[data-task-checkbox]")) {
    const taskId = Number(event.target.dataset.taskId);
    const task = tasks.find((item) => item.id === taskId);
    if (task) {
      task.completed = event.target.checked;
      renderTasks();
    }
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.matches("[data-delete-task]")) {
    const taskId = Number(event.target.dataset.taskId);
    const taskIndex = tasks.findIndex((item) => item.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      renderTasks();
    }
  }
});

function renderTasks() {
  todoList.replaceChildren();

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    const label = document.createElement("label");
    label.className = "todo-label";
    if (task.completed) {
      label.classList.add("todo-completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.dataset.taskCheckbox = "true";
    checkbox.dataset.taskId = task.id;

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    label.append(checkbox, taskText);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.dataset.deleteTask = "true";
    deleteButton.dataset.taskId = task.id;
    deleteButton.textContent = "Delete";

    listItem.append(label, deleteButton);
    todoList.append(listItem);
  });

  const taskWord = tasks.length === 1 ? "task" : "tasks";
  todoCount.textContent = tasks.length === 0 ? "No tasks yet." : `${tasks.length} ${taskWord}`;
}
