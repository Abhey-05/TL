// script.js
document.addEventListener("DOMContentLoaded", function() {
  // User credentials (in a real app, use proper authentication)
  const users = {
    "Abhey": { password: "Head", isHead: true, email: "ee23btech11202@iith.ac.in" },
    "Krati": { password: "Nimish", isHead: false, email: "ce24btech11034@iith.ac.in" },
    "Atharv": { password: "Lambu", isHead: false, email: "ce24btech11010@iith.ac.in" },
    "Rishab": { password: "Naman", isHead: false, email: "rishab@example.com" }
  };

  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (users[username] && users[username].password === password) {
      // Store user data in sessionStorage
      sessionStorage.setItem("currentUser", JSON.stringify({
        username: username,
        isHead: users[username].isHead,
        email: users[username].email
      }));
      
      window.location.href = `welcome.html?user=${encodeURIComponent(username)}&isHead=${users[username].isHead}`;
    } else {
      errorMsg.style.display = "block";
      setTimeout(() => errorMsg.style.display = "none", 3000);
    }
  });
});

// Shared functions
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}