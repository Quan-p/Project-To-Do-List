function createModal() {
    var body = document.body;
    var modalStore = document.createElement('div');
    modalStore.setAttribute('id', 'modalStore');
    modalStore.textContent = 'test';
    body.appendChild(modalStore);
}

export default createModal;