function modalBody() {
    var body = document.body;
    var modalStore = document.createElement('div');
    modalStore.setAttribute('id', 'modalStore');
    modalStore.textContent = 'test';
    body.appendChild(modalStore);
    return modalStore;
}

function modalContent() {
    var mainModal = document.createElement('div');
    mainModal.setAttribute('class', 'modal-content')
    
    var closeSpan = document.createElement('span');
    closeSpan.setAttribute('class', 'sr-only');
    closeSpan.textContent = 'Close';

    mainModal.appendChild(closeSpan);
    modalStore.appendChild(mainModal);
    return mainModal;
}

function createForm() {
    var form = doucment.createElement('form');
    form.setAttribute('id', 'modal-form');

}

function createModal() {
    modalBody();
    modalContent();
}

export default createModal;