import { openModal, openProject, openEdit, formValue, collTask } from './modules/todo.js';
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

function clickEdit() {
    var editArray = document.getElementsByClassName('edit');

    Array.from(editArray).forEach(function(element) {
        element.addEventListener('click', openEdit, false);
    });
};

delTask();
collTask();
btnControl();
addItem();
modalProject();
clickEdit();