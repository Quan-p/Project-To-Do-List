import addProject from './project.js';
import { delTask, showContent, taskEdit, editValue, newTask } from './inbox.js';
import { formValue, writeTask, addColl } from './todo.js';

function btnControl() {
    document.getElementById("inboxBtn").onclick = function() {clickInbox()};
    document.getElementById("todayBtn").onclick = function() {clickToday()};
    document.getElementById("weekBtn").onclick = function() {clickWeek()};
    document.getElementById("project-submit").onclick = function() {clickProject()};
    document.getElementById("modal-submit").onclick = () => {
        formValue();
        writeTask();
        addColl();
        addTodo();
        delTask();
    };
    document.getElementById("edit-submit").onclick = () => {
        editValue();
        closeEdit();
        newTask();
    };
}
function clickInbox() {
    var pageTitle = document.getElementById('mainHead');
    pageTitle.innerHTML = 'Inbox';
    showContent();
}
    
function clickToday() {
    var pageTitle = document.getElementById('mainHead')
    pageTitle.innerHTML = 'Today';
    document.getElementById('inbox').style.display = 'none';
}
    
function clickWeek() {
    var pageTitle = document.getElementById('mainHead')
    pageTitle.innerHTML = 'Week';
    document.getElementById('inbox').style.display = 'none';
}

function clickProject() {
    document.getElementById('project-submit').addEventListener('click', addProject());
    projectStore.style.display = "none";
}

function addTodo() {
    modalStore.style.display = 'none';
}

function closeEdit() {
    editModal.style.display = 'none';
}
export default btnControl