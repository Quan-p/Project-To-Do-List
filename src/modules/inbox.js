function createGrid() {
    var mainGrid = document.createElement('div');
    mainGrid.setAttribute('id', 'mainGrid');

    var mainContent = document.getElementById('mainDisplay');
    mainContent.appendChild(mainGrid);

    mainGrid.textContent = 'test text'

    return mainGrid;
}


function inboxGrid() {
    
}

export default createGrid;