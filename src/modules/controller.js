function btnControl() {
    document.getElementById("inboxBtn").onclick = function() {clickInbox()};
    document.getElementById("todayBtn").onclick = function() {clickToday()};
    document.getElementById("weekBtn").onclick = function() {clickWeek()};
}
function clickInbox() {
    var mainDisplay = document.getElementById('mainDisplay')
    mainDisplay.innerHTML = 'Inbox';
}
    
function clickToday() {
    var mainDisplay = document.getElementById('mainDisplay')
    mainDisplay.innerHTML = 'Today';
}
    
function clickWeek() {
    var mainDisplay = document.getElementById('mainDisplay')
    mainDisplay.innerHTML = 'Week';
}

export default btnControl