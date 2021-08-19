function addProject() {
    var list = document.getElementById('project-list');
    
    var projectItem = document.createElement('li');
    var project = document.getElementById('pName').value;

    projectItem.innerHTML = project;
    list.appendChild(projectItem);
    projectSelect();  
}

function projectSelect() {
    var projectList = document.getElementById('project-list').getElementsByTagName('li');
    var projectArray = Array.from(projectList); 
    
    var select = document.getElementById('project');  

    var last_project = projectArray[projectArray.length - 1].innerText;
    var el = document.createElement("option");
    el.textContent = last_project;
    el.value = last_project;
    select.appendChild(el);
}

function projectLocalStorage() {
    var projectList = document.getElementById('project-list').getElementsByTagName('li');
    var projectArray = [];
    // Loop through the NodeList object.
    for (let i = 0; i <= projectList.length - 1; i++) {
    //projectArray.push(projectList[i]);
    projectArray.push(JSON.stringify(projectList[i].innerHTML));
    console.log(projectList[i]);
    }
    localStorage.setItem('projects', projectArray);
}

function getFromLocalStorage() {
    var projectStore = localStorage.getItem('projects');
}

export {
    addProject,
    projectLocalStorage
}