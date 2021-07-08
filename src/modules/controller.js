function btnControl() {
    document.getElementById("inboxBtn").onclick = function() {clickInbox()};
    document.getElementById("todayBtn").onclick = function() {clickToday()};
    document.getElementById("weekBtn").onclick = function() {clickWeek()};
}
function clickInbox() {
    var pageTitle = document.getElementById('mainHead')
    pageTitle.innerHTML = 'Inbox';
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
    var list = document.getElementById('project-list')
    list.appendChild
}

export default btnControl