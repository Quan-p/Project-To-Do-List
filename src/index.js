//mainDisplay = document.getElementById('mainDisplay');

function clickInbox() {
    mainDisplay = document.getElementById('mainDisplay')
    mainDisplay.innerHTML = 'new title';
}

function clickToday() {

}

function clickWeek() {

}

function controlBtn() {
var inboxBtn = document.getElementById('inboxBtn');
inboxBtn.addEventListener('click', clickInbox);
}

controlBtn();