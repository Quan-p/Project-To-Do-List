function createModal() {
    var body = document.body;
    var modalStore = document.createElement('div');
    modalStore.setAttribute('id', 'modalStore');
    modalStore.textContent = 'test';
    body.appendChild(modalStore);
}

function modalContent() {
    var mainModal = document.createElement('div');
    mainModal.setAttribute('class', 'modal-content')
    
    var closeSpan = document.createElement('span');
    closeSpan.setAttribute('class', 'sr-only');
    closeSpan.textContent = 'Close';

    mainModal.appendChild(closeSpan);
    modalStore.appendChild(mainModal);
    
}



export default createModal;