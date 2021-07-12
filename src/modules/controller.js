import addProject from './project.js';
import showContent from './inbox.js';

function btnControl() {
    document.getElementById("inboxBtn").onclick = function() {clickInbox()};
    document.getElementById("todayBtn").onclick = function() {clickToday()};
    document.getElementById("weekBtn").onclick = function() {clickWeek()};
    document.getElementById("project-submit").onclick = function() {clickProject()};
}
function clickInbox() {
    var pageTitle = document.getElementById('mainHead')
    pageTitle.innerHTML = 'Inbox';
    showContent();
}
    
function clickToday() {
    var pageTitle = document.getElementById('mainHead')
    pageTitle.innerHTML = 'Today';
}
    
function clickWeek() {
    var pageTitle = document.getElementById('mainHead')
    pageTitle.innerHTML = 'Week';
}

function clickProject() {
    document.getElementById('project-submit').addEventListener('click', addProject());
    projectStore.style.display = "none";
}

export default btnControl