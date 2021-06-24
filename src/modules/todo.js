function modalBody() {
    var body = document.body;
    var modalStore = document.createElement('div');
    modalStore.setAttribute('id', 'modalStore');
    modalStore.setAttribute('class', 'modal');

    body.appendChild(modalStore);
    return modalStore;
}

function modalContent() {
    var mainModal = document.createElement('div');
    mainModal.setAttribute('class', 'modal-content');
    
    var closeSpan = document.createElement('span');
    closeSpan.setAttribute('class', 'sr-only');
    closeSpan.textContent = 'Close';

    var columnOne = document.createElement('div');
    columnOne.setAttribute('class', 'columns');
    columnOne.setAttribute('id', 'col-one');
    var columnTwo = document.createElement('div');
    columnTwo.setAttribute('class', 'columns');
    columnTwo.setAttribute('id', 'col-two');

    var modalTitle = document.createElement('p');
    modalTitle.setAttribute('class', 'textContent')
    modalTitle.innerHTML = 'test';
    mainModal.appendChild(modalTitle);

    var modalSpace = modalBody();

    mainModal.appendChild(columnOne);
    mainModal.appendChild(columnTwo);

    mainModal.appendChild(closeSpan);
    modalSpace.appendChild(mainModal);
    return mainModal;
}

function createForm() {
    var form = doucment.createElement('form');
    form.setAttribute('id', 'modal-form');
    mainModal.appendChild(form);
}

function openModal() {
    modalStore.style.display = 'block';
}

function createModal() {
    modalContent();
    openModal();
}

export default createModal;