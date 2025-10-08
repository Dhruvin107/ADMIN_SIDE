// Sidebar toggle
const toggleBtn = document.getElementById("toggleSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Sorting functionality
document.getElementById("sortSelect").addEventListener("change", function () {
    const table = document.getElementById("expensesTable").tBodies[0];
    const rows = Array.from(table.rows);
    const value = this.value;

    rows.sort((a, b) => {
        if (value == "1") { // Date
            return new Date(a.cells[0].innerText) - new Date(b.cells[0].innerText);
        }
        if (value == "2") { // Expense Name
            return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
        }
        if (value == "3") { // Amount
            return parseInt(a.cells[2].innerText) - parseInt(b.cells[2].innerText);
        }
        if (value == "4") { // Paid By
            return a.cells[3].innerText.localeCompare(b.cells[3].innerText);
        }
        return 0;
    });

    rows.forEach(row => table.appendChild(row));
});

// 🔴 Delete Team button functionality
document.querySelector(".btn-danger").addEventListener("click", function () {
    const teamName = document.getElementById("teamName").innerText;
    if (confirm(`Are you sure you want to delete ${teamName}?`)) {
        alert(`${teamName} deleted successfully!`);
        // Redirect back to Manage Teams page
        window.location.href = "./admin_manage_team_page.html";
    }
});