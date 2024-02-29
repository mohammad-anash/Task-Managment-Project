const taskInput = document.getElementById("task-input");
const addTask = document.querySelector(".add-task");
const searchInput = document.getElementById("search-input");
const clearTask = document.querySelector(".clear-task");
const taskContainer = document.querySelector(".task-container");

function makeTaskElement() {
  const taskName = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const task = document.createElement("div");

  // add class in Element
  deleteBtn.classList.add("delete", "btn");
  editBtn.classList.add("edit", "btn");
  taskName.classList.add("task-name");
  task.classList.add("task");

  task.addEventListener("click", function (e) {
    addFunctionalityOnOtherElements(e.target);
  });

  // fill text in Element
  deleteBtn.innerText = "Delete";
  editBtn.innerText = "Edit";
  taskName.innerText = taskInput.value;

  task.append(taskName, deleteBtn, editBtn);
  taskContainer.appendChild(task);

  taskInput.value = "";
}

function deleteAllTaskElement() {
  document.querySelectorAll(".task").forEach((Item) => Item.remove());
}

function addFunctionalityOnOtherElements(getElement) {
  if (getElement.classList[0] === "delete") {
    document.querySelector(".task").remove();
  }

  if (getElement.classList[0] === "edit") {
    const taskName = document
      .querySelectorAll(".task-name")
      .forEach((taskText) => {
        return taskText;
      });

    console.log(taskName);
  }
}

// add click event on addTask button for creating task element;
addTask.addEventListener("click", makeTaskElement);

// add Delete Functionality to Delete All Task Element Select Elements
clearTask.addEventListener("click", deleteAllTaskElement);
