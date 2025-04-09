document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
  
    // 👇 List of approved users
    const users = {
      "Abhey": "Head",
      "Krati": "Nimish",
      "Atharv": "Lambu",
      "Rishab": "Naman"
      // Add more students here
    };
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
  
      if (users[username] && users[username] === password) {
        window.location.href = `welcome.html?user=${encodeURIComponent(username)}`;
      } else {
        errorMsg.style.display = "block";
      }
    });
  });
  