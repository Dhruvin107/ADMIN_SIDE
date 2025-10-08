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

// Delete functionality
document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.closest("tr").remove();
        updateRowNumbers();
    });
});

// Update row numbers after delete
function updateRowNumbers() {
    const rows = document.querySelectorAll("#teamsTable tbody tr");
    rows.forEach((row, index) => {
        row.querySelector("td").innerText = index + 1;
    });
}

// Sorting functionality
document.getElementById("sortSelect").addEventListener("change", function () {
    const table = document.getElementById("teamsTable").tBodies[0];
    const rows = Array.from(table.rows);
    const value = this.value;

    rows.sort((a, b) => {
        if (value == "1") { // Sort by Name
            return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
        }
        if (value == "2") { // Sort by Amount (convert to number)
            const amtA = parseAmount(a.cells[2].innerText);
            const amtB = parseAmount(b.cells[2].innerText);
            return amtA - amtB;
        }
        if (value == "3") { // Sort by Members
            return parseInt(a.cells[3].innerText) - parseInt(b.cells[3].innerText);
        }
        return 0;
    });

    rows.forEach(row => table.appendChild(row));
    updateRowNumbers();
});

// Helper: convert amount text to number
function parseAmount(str) {
    str = str.replace(/,/g, "").toLowerCase();
    if (str.includes("lakh")) {
        return parseFloat(str) * 100000;
    }
    return parseFloat(str) || 0;
}

// ✅ View button click -> redirect to another page
document.querySelectorAll(".btn-primary").forEach(btn => {
    btn.addEventListener("click", function () {
        const teamName = this.closest("tr").cells[1].innerText; // get team name
        // Redirect with query parameter (teamName)
        window.location.href = `admin_team_details.html?team=${encodeURIComponent(teamName)}`;
    });
});
