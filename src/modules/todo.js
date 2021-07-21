function closeModal() {
    modalStore.style.display = 'none';
    projectStore.style.display = 'none';
}

function openModal() {
    var modal = document.getElementById('modalStore')
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close-button')[0];
    span.addEventListener('click', closeModal);

    window.onclick = function(event) {
        if (event.target == modalStore) {
          modalStore.style.display = "none";
        }
      }
}

function openProject() {
    var modal = document.getElementById('projectStore')
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close-button')[1];
    span.addEventListener('click', closeModal);

    window.onclick = function(event) {
        if (event.target == projectStore) {
          projectStore.style.display = "none";
        }
      }
}

function formValue() {
    var taskTitle = document.getElementById('title').value;
    var taskDesc = document.getElementById('desc').value;
    var priority = document.getElementById('priority').value;
    var dueDate = document.getElementById('due-date').value;
    var taskProject = document.getElementById('project').value;
    return {
        taskTitle,
        taskDesc,
        priority,
        dueDate,
        taskProject
    };
    
}

// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
// }

function writeTask() {
    var taskList = document.getElementById('taskList');
    
    var taskItem = document.createElement('li');
    taskItem.textContent = taskTitle;
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    var delItem = document.createElement('span');
    check.setAttribute('class', 'material-icons taskControl');
    delItem.value = 'delete';
    var edit = document.createElement('span');
    check.setAttribute('class', 'material-icons taskControl');
    edit.value = 'edit';
    var date = document.createElement('div');
    date.setAttribute('class', 'taskControl');
    date.value = dueDate;

}

export {
    openModal,
    openProject,
    formValue,
    writeTask
    //validateForm
}