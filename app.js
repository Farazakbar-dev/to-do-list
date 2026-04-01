let taskContainer = document.getElementById("create-task")

let createTaskBtn = document.getElementById("create-task-btn")

createTaskBtn.addEventListener('click', showTaskContainer() )

function showTaskContainer() {
    taskContainer.style.display =  'none'
}

