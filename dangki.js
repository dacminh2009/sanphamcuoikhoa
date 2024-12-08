document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }

    alert(`Chào mừng ${username}, bạn đã đăng ký thành công!`);
});
