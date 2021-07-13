function addProject() {
    var list = document.getElementById('project-list');
    
    var projectItem = document.createElement('li');
    var project = document.getElementById('pName').value;

    projectItem.innerHTML = project;
    list.appendChild(projectItem);
}

function submit() {
    
}

export default addProject