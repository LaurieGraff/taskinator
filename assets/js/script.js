var formEl = document.querySelector("#task-form");
    console.log(formEl);

var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {

    event.prefentDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};


formEl.addEventListener("submit", createTaskHandler); 

   
