import { openModal, openProject, formValue, collTask } from './modules/todo.js';
import btnControl from './modules/controller.js';
import {delTask, editTask} from './modules/inbox.js';

function addItem() {
    var addTodo = document.getElementById('open-modal');
    addTodo.addEventListener('click', openModal);
    document.getElementById('addListItem').addEventListener('click', openModal);
}

function modalProject() {
    var addProject = document.getElementById('addProject');
    addProject.addEventListener('click', openProject);
}

delTask();
collTask();
btnControl();
addItem();
modalProject();
editTask();