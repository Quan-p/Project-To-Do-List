function btnControl() {
    clickInbox();
    clickToday();
    clickWeek();
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