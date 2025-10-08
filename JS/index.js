// Admin Login Validation
document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let form = event.target;
    let username = document.getElementById("adminUsername");
    let password = document.getElementById("adminPassword");
    let isValid = true;

    // Reset validation states
    username.classList.remove("is-invalid");
    password.classList.remove("is-invalid");

    // Username check
    if (username.value.trim() === "" || username.value.trim().length < 3) {
        username.classList.add("is-invalid");
        isValid = false;
    }

    // Password check
    if (password.value.trim() === "" || password.value.trim().length < 6) {
        password.classList.add("is-invalid");
        isValid = false;
    }

    if (isValid) {
        alert("✅ Admin Login Successful (demo only)");
        window.location.href = "admin_home_page.html";
    }
});