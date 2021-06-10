//mainDisplay = document.getElementById('mainDisplay');

function clickInbox() {
    mainDisplay = document.getElementById('mainDisplay')
    mainDisplay.innerHTML = 'Inbox';
}

function clickToday() {
    mainDisplay = document.getElementById('mainDisplay')
    mainDisplay.innerHTML = 'Today';
}

function clickWeek() {
    mainDisplay = document.getElementById('mainDisplay')
    mainDisplay.innerHTML = 'Week';
}

function controlBtn() {
var inboxBtn = document.getElementById('inboxBtn');
inboxBtn.addEventListener('click', clickInbox);
}

controlBtn();