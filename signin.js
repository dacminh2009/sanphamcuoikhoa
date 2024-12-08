function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
      alert(`Xin chào, ${username}! Đăng nhập thành công!`);
    }
  }
  