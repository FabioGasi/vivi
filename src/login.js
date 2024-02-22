document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var korrektesPasswort = 'vivi'; 
    var eingegebenesPasswort = document.getElementById('password').value;

    if(eingegebenesPasswort === korrektesPasswort) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Falsches Passwort!';
    }
});
