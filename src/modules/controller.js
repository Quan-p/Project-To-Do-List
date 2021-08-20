import { addProject, makeList, projectLocalStorage, getFromLocalStorage } from './project.js';
import { delTask, showContent } from './inbox.js';
import { formValue, writeTask, addColl } from './todo.js';

function btnControl() {
    document.getElementById("inboxBtn").onclick = function() {clickInbox()};
    document.getElementById("project-submit").onclick = function() {clickProject()};
    document.getElementById("modal-submit").onclick = () => {
        formValue();
        writeTask();
        addColl();
        addTodo();
        delTask();
    };
}
function clickInbox() {
    var pageTitle = document.getElementById('mainHead');
    pageTitle.innerHTML = 'Inbox';
    showContent();
}
    
function clickProject() {
    document.getElementById('project-submit').addEventListener('click', addProject(), projectLocalStorage());
    projectStore.style.display = "none";
    document.getElementById('pName').value = "";
}

function addTodo() {
    modalStore.style.display = 'none';
}

export default btnControl