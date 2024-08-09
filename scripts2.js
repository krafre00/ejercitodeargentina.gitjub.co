document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        const username = localStorage.getItem('username');
        userNameElement.textContent = username ? username : 'Usuario';
    }
});
