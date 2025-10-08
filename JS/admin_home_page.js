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

// Chart.js for admin dashboard
const ctx = document.getElementById('adminChart').getContext('2d');
const adminChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Per User', 'Per Team'],
        datasets: [{
            label: 'Expenses (₹)',
            data: [45000, 90000],
            backgroundColor: ['#0d6efd', '#198754']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { callback: value => value + '₹' }
            }
        }
    }
});

