function showContent() {
    var main = document.getElementById('inbox');
    main.style.display = 'flex';
}

function delTask() {
    var remove = document.getElementsByClassName("delTask");
    var i;
    
    for (i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', function(e) {
        e.target.parentNode.parentNode.remove();
    }, false);
}
}

function taskEdit() {
    var x = document.getElementById('taskList').parentElement;
    console.log(x);
}

function editValue() {
    var taskTitle = document.getElementById('new-title').value;
    var taskDesc = document.getElementById('new-desc').value;
    var priority = document.getElementById('new-priority').value;
    var dueDate = document.getElementById('new-date').value;
    var taskProject = document.getElementById('new-project').value;
    return [
        taskTitle,
        taskDesc,
        priority,
        dueDate,
        taskProject
    ];
}


export { 
    showContent,
    delTask,
    taskEdit,
    editValue
}