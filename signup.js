document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!validateEmail(email)) {
        alert('لطفا ایمیل معتبر وارد کنید');
        return;
    }
    
    if (password.length < 6) {
        alert('رمز عبور باید حداقل 6 کاراکتر باشد');
        return;
    }
    
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    
    if (existingUser) {
        alert('این ایمیل قبلا ثبت شده است');
    } else {
        users.push({
            fullname,
            email,
            password 
        });
        localStorage.setItem('users', JSON.stringify(users));
        alert('ثبت نام با موفقیت انجام شد!');
        window.location.href = "login.html";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
