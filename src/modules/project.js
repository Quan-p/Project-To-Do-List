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

    for(var i = 0; i < projectArray.length; i++) {
        var opt = projectArray[i].innerHTML;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }


}

export default addProject