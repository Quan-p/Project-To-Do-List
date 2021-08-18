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
function checkOff() {
    var checkbox = document.querySelectorAll("input[type = checkbox]");
    checkbox.forEach(function(checkbox) {
        checkbox.addEventListener('change', function(e) {
            var x = e.target.parentNode.parentNode;
            this.classList.toggle("checked");
            if (this.classList.contains('checked')) {
                x.style.textDecoration = 'line-through';
                
            } else {
                x.style.textDecoration = ' none';
            }
    });  
})
} 


export { 
    showContent,
    delTask, 
    checkOff
}