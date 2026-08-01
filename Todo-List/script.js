const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];

// Load tasks when page opens
loadTasks();

addButton.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task");

        return;

    }

    tasks.push({

        text: taskText,
        completed: false

    });

    saveTasks();

    renderTasks();

    taskInput.value = "";

    taskInput.focus();

}

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        const li = document.createElement("li");

        const span = document.createElement("span");

        span.textContent = task.text;

        if (task.completed) {

            span.classList.add("completed");

        }

        span.addEventListener("click", function () {

            tasks[index].completed = !tasks[index].completed;

            saveTasks();

            renderTasks();

        });

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "🗑";

        deleteButton.addEventListener("click", function () {

            tasks.splice(index, 1);

            saveTasks();

            renderTasks();

        });

        li.appendChild(span);

        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks() {

    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {

        tasks = JSON.parse(storedTasks);

        renderTasks();

    }

}