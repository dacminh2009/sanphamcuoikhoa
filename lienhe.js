document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form reload trang
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Cảm ơn ${name} đã liên hệ! Chúng tôi sẽ phản hồi qua email: ${email}.`);
        // Xóa nội dung form sau khi gửi
        document.getElementById("contactForm").reset();
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
});
