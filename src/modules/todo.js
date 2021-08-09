function closeModal() {
    modalStore.style.display = 'none';
    projectStore.style.display = 'none';
    editModal.style.display = 'none';
}

function openModal() {
    var modal = document.getElementById('modalStore')
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close-button')[0];
    span.addEventListener('click', closeModal);

    window.onclick = function(event) {
        if (event.target == modalStore) {
          modalStore.style.display = "none";
        }
      }
}

function openProject() {
    var modal = document.getElementById('projectStore')
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close-button')[1];
    span.addEventListener('click', closeModal);

    window.onclick = function(event) {
        if (event.target == projectStore) {
          projectStore.style.display = "none";
        }
      }
}

function openEdit(event) {
    var modal = document.getElementById('editModal')
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close-button')[2];
    span.addEventListener('click', closeModal);

    window.onclick = function(event) {
        if (event.target == editModal) {
          editModal.style.display = "none";
        }
      }
}

function formValue() {
    var taskTitle = document.getElementById('title').value;
    var taskDesc = document.getElementById('desc').value;
    var priority = document.getElementById('priority').value;
    var dueDate = document.getElementById('due-date').value;
    var taskProject = document.getElementById('project').value;
    return [
        taskTitle,
        taskDesc,
        priority,
        dueDate,
        taskProject
    ];
}
function changeDesc(event) {
    var desc, input, text;
    event = event || window.event;
    desc = event.target || event.srcElement;
    if (desc && desc.tagName.toUpperCase() === "P") {
    
        desc.style.display = "none";

        text = desc.innerHTML;

        input = document.createElement("input");
        input.type = "text";
        input.value = text;
        input.size = Math.max(text.length / 4 * 3, 4);
        desc.parentNode.insertBefore(input, desc);

        input.focus();
        input.onblur = function() {
            
            desc.parentNode.removeChild(input);

            desc.innerHTML = input.value == "" ? "&nbsp;" : input.value;

            desc.style.display = "";
        }
    }
}
// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
// }

function writeTask() {
    var values = formValue();
    var taskList = document.getElementById('taskList');
    var taskItem = document.createElement('li');
    
    var leftTask = document.createElement('div');
    leftTask.setAttribute('class', 'left-task');
    var rightTask = document.createElement('div');
    rightTask.setAttribute('class', 'right-task');
    
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    var titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'title collapsible');
    titleDiv.innerHTML = values[0];
    titleDiv.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
    var delItem = document.createElement('span');
    delItem.setAttribute('class', 'material-icons taskControl delTask');
    delItem.textContent = 'delete';
    var edit = document.createElement('span');
    edit.setAttribute('class', 'material-icons taskControl edit');
    edit.textContent = 'edit';
    edit.addEventListener('click', function() {
        this.classList.toggle('active');
        openEdit();
        });
    var date = document.createElement('div');
    date.setAttribute('class', 'taskControl');
    date.textContent = values[3];

    leftTask.appendChild(check);
    leftTask.appendChild(titleDiv);
    rightTask.appendChild(date);
    rightTask.appendChild(edit);
    rightTask.appendChild(delItem);

    taskItem.appendChild(leftTask);
    taskItem.appendChild(rightTask);
    taskList.appendChild(taskItem);
}

function addColl() {
    var values = formValue();
    var taskContent = document.createElement('div');
    taskContent.setAttribute('class', 'task-content');
    var descText = document.createElement('p');
    descText.setAttribute('class', 'taskDesc');
    descText.innerHTML = values[1];
    descText.addEventListener('click', function(event) {
        this.classList.toggle('active');
        changeDesc(event);
        });
    taskContent.appendChild(descText);

    var leftTask = document.getElementsByClassName('left-task');

    leftTask[leftTask.length - 1].appendChild(taskContent);

}

function collTask() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

export {
    openModal,
    openProject,
    formValue,
    writeTask,
    addColl,
    collTask,
    changeDesc
    //validateForm
}