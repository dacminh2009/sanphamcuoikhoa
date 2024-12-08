document.getElementById("explore-btn").addEventListener("click", function() {
    window.location.href = "#products";
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã liên hệ!");
});
