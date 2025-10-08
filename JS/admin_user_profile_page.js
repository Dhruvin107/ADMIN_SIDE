document.querySelector(".btn-danger").addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this member?")) {
        alert("Member deleted successfully!");
        window.location.href = "admin_manage_user_page.html";
      }
    });

    document.querySelector(".btn-warning").addEventListener("click", function () {
      if (confirm("Are you sure you want to block this user?")) {
        alert("User has been blocked!");
      }
    });