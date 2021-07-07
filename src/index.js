import createGrid from './modules/inbox.js';
import { openModal } from './modules/todo.js';
import btnControl from './modules/controller.js';

createGrid();

function addItem() {
    var addProject = document.getElementById('addProject');
    addProject.addEventListener('click', openModal);
}

btnControl();
addItem();
controlBtn();

