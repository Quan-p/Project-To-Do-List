import createGrid from './modules/inbox.js';
import { openModal, openProject } from './modules/todo.js';
import btnControl from './modules/controller.js';

function addItem() {
    var addTodo = document.getElementById('open-modal');
    addTodo.addEventListener('click', openModal);
}

function addProject() {
    var addProject = document.getElementById('addProject');
    addProject.addEventListener('click', openProject);
}

btnControl();
addItem();
addProject();

