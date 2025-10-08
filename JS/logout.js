document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Clear localStorage / sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // (Optional) Clear cookies
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Redirect to login page
    window.location.href = "index.html";
  });