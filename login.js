document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === username);
    
    if (user && user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = "index.html";
    } else {
        alert('اطلاعات ورود نادرست است');
    }
});
