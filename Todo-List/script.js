const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task");

        return;

    }

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = taskText;

    span.addEventListener("click", function () {

        span.classList.toggle("completed");

    });

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "🗑";

    deleteButton.addEventListener("click", function () {

        li.remove();

    });

    li.appendChild(span);

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

    taskInput.focus();

}