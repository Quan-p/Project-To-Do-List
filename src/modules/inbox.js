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



export { 
    showContent,
    delTask
}