// Sorting functionality
  document.getElementById("sortSelect").addEventListener("change", function () {
    const table = document.getElementById("userTable").tBodies[0];
    const rows = Array.from(table.rows);
    const value = this.value;

    rows.sort((a, b) => {
      if (value == "1") { // User Name
        return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
      }
      if (value == "2") { // Expense Till (remove K, compare numbers)
        return parseInt(a.cells[2].innerText) - parseInt(b.cells[2].innerText);
      }
      if (value == "3") { // Total Teams Joined
        return parseInt(a.cells[3].innerText) - parseInt(b.cells[3].innerText);
      }
      return 0;
    });

    rows.forEach(row => table.appendChild(row));
  });

  // Delete button functionality
  document.querySelectorAll(".deleteBtn").forEach(btn => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const userName = row.cells[1].innerText;
      if (confirm(`Are you sure you want to delete ${userName}?`)) {
        row.remove();
        alert(`${userName} deleted successfully!`);
      }
    });
  });

  // View button functionality -> redirect to profile page
  document.querySelectorAll(".viewBtn").forEach(btn => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const userName = row.cells[1].innerText;
      const expense = row.cells[2].innerText;
      const teams = row.cells[3].innerText;

      // Redirect with query parameters (so profile page can use them)
      window.location.href = `admin_user_profile_page.html?name=${encodeURIComponent(userName)}&expense=${expense}&teams=${teams}`;
    });
  });