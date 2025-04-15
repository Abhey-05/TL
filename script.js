document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");

  const users = {
    "Abhey": { password: "Head", isHead: true },
    "Krati": { password: "Nimish", isHead: false },
    "Atharv": { password: "Lambu", isHead: false },
    "Rishab": { password: "Naman", isHead: false }
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
      window.location.href = `welcome.html?user=${encodeURIComponent(username)}&isHead=${users[username].isHead}`;
    } else {
      errorMsg.style.display = "block";
    }
  });
});