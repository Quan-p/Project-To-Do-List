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
    columnTwo.appendChild(textTwo)

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

    // var modalTitle = document.createElement('p');
    // modalTitle.setAttribute('class', 'textContent')
    // modalTitle.innerHTML = 'test';
    
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
    return mainModal;
}

function createForm() {
    var form = doucment.createElement('form');
    form.setAttribute('id', 'modal-form');
    mainModal.appendChild(form);
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

function createModal() {
    modalContent();
}

export {
    modalContent,
    openModal
}