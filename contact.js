document.getElementById("contactForm");
addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert(`پیام شما ارسال شد! نام: ${name}, ایمیل: ${email}, پیام: ${message}`);
});
