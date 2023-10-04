document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'User' && password === '12345') {
            // Successful login
            alert('Login successful!');
            // Redirect to the next page
            window.location.href = './containers/nav.html'; // Replace 'next-page.html' with the URL of your next page
        } else {
            // Incorrect login
            alert('Username and password are incorrect.');
        }
    });
});
