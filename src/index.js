import createGrid from './modules/inbox.js';
import { openModal } from './modules/todo.js';
import btnControl from './modules/controller.js';

createGrid();

function addItem() {
    var addProject = document.getElementById('open-modal');
    addProject.addEventListener('click', openModal);
}

btnControl();
addItem();

