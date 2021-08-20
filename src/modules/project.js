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
    var newArray = [];
    // Loop through the NodeList object.
    for (let i = 0; i <= projectList.length - 1; i++) {
    newArray.push(projectList[i].innerHTML);
    }
    localStorage.setItem('projects', newArray);
}

// function getFromLocalStorage() {
//     var projectStore = localStorage.getItem('projects');

//     if (projectStore) {
//         var newArray = JSON.parse(projectStore);
//     }
//     return newArray;
// }

// function makeList() {
//     var projectStore = localStorage.getItem('projects');
    
//     var list = document.getElementById('project-list');
//     for (var i = 0; i < projectStore.length; i++) {
//         var projectItem = document.createElement('li');
//         projectItem.appendChild(document.createTextNode(projectStore[i]));
//         list.appendChild(projectItem);
//     }
//     console.log(typeof list)
// }

export {
    addProject,
    projectLocalStorage,
    makeList
}