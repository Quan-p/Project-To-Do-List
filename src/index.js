import { openModal, openProject, changeDesc, collTask } from './modules/todo.js';
import btnControl from './modules/controller.js';
import {checkOff, delTask} from './modules/inbox.js';
import { projectSort, projectStore } from './modules/project.js';

function addItem() {
    var addTodo = document.getElementById('open-modal');
    addTodo.addEventListener('click', openModal);
    document.getElementById('addListItem').addEventListener('click', openModal);
}

function modalProject() {
    var addProject = document.getElementById('addProject');
    addProject.addEventListener('click', openProject);
}

function clickEdit() {
    var editArray = document.getElementsByClassName('taskDesc');

    Array.from(editArray).forEach(function(element) {
        element.addEventListener('click', changeDesc, false);
    })};

delTask();
collTask();
btnControl();
addItem();
modalProject();
clickEdit();
checkOff();
projectSort();