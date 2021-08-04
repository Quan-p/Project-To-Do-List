function showContent() {
    var main = document.getElementById('inbox');
    main.style.display = 'flex';
}

function delTask() {
    var remove = document.getElementsByClassName("delTask");
    var i;
    
    for (i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', function(e) {
        e.target.parentNode.parentNode.remove();
    }, false);
}
}

function editTask() {
    var edit = document.getElementsByClassName('edit');
    var i;

    for(i = 0; i < edit.length; i++) {
        edit[i].addEventListener('click', function(e) {
            this.classList.toggle("active")
        }
    )};
}

export { 
    showContent,
    delTask, 
    editTask
}