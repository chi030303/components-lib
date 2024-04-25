var passwordInput = document.getElementById('password-input');
var toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
});
