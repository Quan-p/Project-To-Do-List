import createGrid from './modules/inbox.js';
import { modalContent, openModal } from './modules/todo.js';
//import openModal from './modules/todo.js';

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

var todayBtn = document.getElementById('todayBtn');
todayBtn.addEventListener('click', clickToday);

var weekBtn = document.getElementById('weekBtn');
weekBtn.addEventListener('click', clickWeek);

createGrid();
}

function addItem() {
    var addProject = document.getElementById('addProject');
    addProject.addEventListener('click', openModal);
}

document.addEventListener('DOMContentLoaded', function() {
    modalContent();
});

//modalContent();
addItem();
controlBtn();

