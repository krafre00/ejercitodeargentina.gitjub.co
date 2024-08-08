document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);

    window.location.href = 'welcome.html'; // Redirige a la página de bienvenida
});

document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        const username = localStorage.getItem('username');
        userNameElement.textContent = username ? username : 'Usuario';
    }
});
