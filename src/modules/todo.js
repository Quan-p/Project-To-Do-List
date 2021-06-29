function modalCreate() {
    var body = document.body;
    var modalStore = document.createElement('div');
    modalStore.setAttribute('id', 'modalStore');
    modalStore.setAttribute('class', 'modal');

    body.appendChild(modalStore);
    return modalStore;
}

function columnContent() {
    var modalBody = document.createElement('div');
    modalBody.setAttribute('class', 'modal-body');

    var columnOne = document.createElement('div');
    columnOne.setAttribute('class', 'columns');
    columnOne.setAttribute('id', 'col-one');
    var columnTwo = document.createElement('div');
    columnTwo.setAttribute('class', 'columns');
    columnTwo.setAttribute('id', 'col-two');

    var textOne = document.createElement('p');
    textOne.setAttribute('class', 'column-text')
    textOne.innerHTML = 'some text';

    var textTwo = document.createElement('p');
    textTwo.setAttribute('class', 'column-text')
    textTwo.innerHTML = 'some text';

    columnOne.appendChild(textOne);
    columnTwo.appendChild(textTwo);

    var formOne = document.createElement('form');
    formOne.setAttribute('class', 'modal-form');
    var formTwo = document.createElement('form');
    formTwo.setAttribute('class', 'modal-form');

    var title = document.createElement('label');
    title.setAttribute('for', 'title');
    title.innerHTML = 'Title:';
    formOne.appendChild(title);
    formOne.appendChild(document.createElement('br'));

    var titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    
    formOne.appendChild(titleInput);
    formOne.appendChild(document.createElement("br"));

    var desc = document.createElement('label');
    desc.setAttribute('for', 'description');
    desc.innerHTML = 'Description:';
    formOne.appendChild(desc);
    formOne.appendChild(document.createElement('br'));

    var descInput = document.createElement('input');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('id', 'desc');
    descInput.setAttribute('name', 'desc');
    
    formOne.appendChild(descInput);
    formOne.appendChild(document.createElement("br"));
    
    columnOne.appendChild(formOne);
    columnTwo.appendChild(formTwo);

    modalBody.appendChild(columnOne);
    modalBody.appendChild(columnTwo);
   
    return modalBody;
}

function modalContent() {
    var mainModal = document.createElement('div');
    mainModal.setAttribute('class', 'modal-content');

    var header = document.createElement('div');
    header.setAttribute('class', 'modal-header');
    header.innerHTML = 'Add Task';
    
    var closeSpan = document.createElement('span');
    closeSpan.setAttribute('class', 'close-button');
    closeSpan.innerHTML = '&times;';

    var modalTitle = document.createElement('p');
    modalTitle.setAttribute('class', 'textContent')
    modalTitle.innerHTML = 'test';
    
    var footer = document.createElement('div');
    footer.setAttribute('class', 'modal-footer');

    var modalSpace = modalCreate();
    var columnCreate = columnContent();

    mainModal.appendChild(header);
    header.appendChild(closeSpan);

    //columnCreate.appendChild(modalTitle);
    mainModal.appendChild(columnCreate);
    mainModal.appendChild(footer);

    modalSpace.appendChild(mainModal);

    //createForm();

    return mainModal;
}

function closeModal() {
    modalStore.style.display = 'none';
}

function openModal() {
    modalStore.style.display = 'block';

    var span = document.getElementsByClassName('close-button')[0];
    span.addEventListener('click', closeModal);

    window.onclick = function(event) {
        if (event.target == modalStore) {
          modalStore.style.display = "none";
        }
      }
}

export {
    modalContent,
    openModal
}