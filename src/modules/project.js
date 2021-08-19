function addProject() {
    var list = document.getElementById('project-list');
    
    var projectItem = document.createElement('li');
    var project = document.getElementById('pName').value;

    projectItem.innerHTML = project;
    list.appendChild(projectItem);
    projectSelect();  
//     localStorage.setItem('projects', JSON.stringify(projectArray));
//     localStorage.getItem('projects');
//     console.log(projectList);
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

function projectSort() {
    var taskList = document.getElementById('taskList');

    var tasks = [];
    for(var i = taskList.childNodes.length; i--;) {
        if(taskList.childNodes[i].nodeName === 'LI')
        tasks.push(taskList.childNodes[i]);
    }

    console.log(tasks);
}

function projectLocalStorage() {
    var projectList = document.getElementById('project-list').getElementsByTagName('li');

    // Loop through the NodeList object.
    for (let i = 0; i <= projectList.length - 1; i++) {
    console.log (projectList[i]);
}
}

export {
    addProject,
    projectSort,
    projectLocalStorage
}