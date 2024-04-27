const openDialogBtn = document.getElementById('open-dialog-btn');
const dialogContainer = document.getElementById('dialog-container');
const overlay = document.getElementById('overlay');
const dialogBody = document.getElementById('dialog-body');
const confirmBtn = document.getElementById('confirm-btn');
const cancelBtn = document.getElementById('cancel-btn');

openDialogBtn.addEventListener('click', () => {
    openDialog('This is a dialog!');
});

confirmBtn.addEventListener('click', closeDialog);
cancelBtn.addEventListener('click', closeDialog);
overlay.addEventListener('click', closeDialog);

function openDialog(message) {
    dialogBody.textContent = message;
    dialogContainer.style.display = 'flex';
    overlay.style.display = 'block';
}

function closeDialog() {
    dialogContainer.style.display = 'none';
    overlay.style.display = 'none';
}
