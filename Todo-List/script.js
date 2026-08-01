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

    li.textContent = taskText;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "🗑";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

    taskInput.focus();

}