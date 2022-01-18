var formEl = document.querySelector("#task-form");
var taskstodoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.classname = "task-info";

    taskInfoEl.innerHTML = "<h3 class= 'task-name'>" + taskNameInput + "</h3><span class='task-type>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    taskstodoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
