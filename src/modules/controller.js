import addProject from './project.js';
import showContent from './inbox.js';
import { formValue, writeTask } from './todo.js';

function btnControl() {
    document.getElementById("inboxBtn").onclick = function() {clickInbox()};
    document.getElementById("todayBtn").onclick = function() {clickToday()};
    document.getElementById("weekBtn").onclick = function() {clickWeek()};
    document.getElementById("project-submit").onclick = function() {clickProject()};
    document.getElementById("modal-submit").onclick = () => {
        formValue();
        writeTask();
        addTodo();
    };
}
function clickInbox() {
    var pageTitle = document.getElementById('mainHead')
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
    // document.getElementById('modal-submit').addEventListener('click', () => {
    //     formValue();
    //     writeTask();
    //     });
    modalStore.style.display = 'none';
}

export default btnControl