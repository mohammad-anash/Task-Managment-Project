function qS(selector) {
  return document.querySelector(selector);
}

const taskInput = qS("#task-input");
const addTask = qS(".add-task");
const searchInput = qS("#search-input");
const clearTaskButton = qS(".clear-task");
const taskContainer = qS(".task-container");
const container = qS(".container");
const fragment = document.createDocumentFragment();

// Function to create and fix elements
function makeAndFixElement(ele, attType, attName, appendWith) {
  const element = document.createElement(ele);

  if (attType && attName) {
    element.setAttribute(attType, attName);
  }
  if (appendWith) {
    appendWith.append(element);
  }

  return element;
}

addTask.addEventListener("click", () => {
  if (taskInput.value.length === 0) {
    alert("please fill text in your Input");
  } else {
    const taskDiv = makeAndFixElement(
      "div",
      "class",
      "task-div",
      taskContainer
    );
    const taskName = makeAndFixElement(
      "div",
      "class",
      "task-name",
      taskContainer
    );
    const deleteButton = makeAndFixElement(
      "button",
      "class",
      "delete-btn btn",
      taskContainer
    );
    const editButton = makeAndFixElement(
      "button",
      "class",
      "edit-btn btn",
      taskContainer
    );

    // fill text in element
    taskName.textContent = taskInput.value;
    deleteButton.innerText = "Delete";
    editButton.innerText = "Edit";

    // add event on taskDiv
    taskDiv.addEventListener("click", function (event) {
      addFunctionalityOnOtherElement(event);
    });

    taskDiv.append(taskName, deleteButton, editButton);
    taskContainer.append(taskDiv);
    fragment.append(container);
    document.body.append(fragment);

    taskInput.value = "";
  }
});

function addFunctionalityOnOtherElement(detials) {
  if (detials.target.classList[0] === "delete-btn") {
    document.querySelector(".task-div").remove();
  }
  if (detials.target.classList[0] === "edit-btn") {
    const getTaskNameText =
      detials.target.parentElement.querySelector(".task-name");
    let user = prompt("change your text as you want");

    let getText = getTaskNameText.innerText;
    getTaskNameText.innerText = `${getText} ${user}`;
  }
}
