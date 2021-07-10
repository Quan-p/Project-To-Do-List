function addProject() {
    var list = document.getElementById('project-list');
    
    var projectItem = document.createElement('li');
    projectItem.innerText = 'test';

    list.appendChild(projectItem);
}

export default addProject