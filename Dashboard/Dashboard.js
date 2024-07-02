function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

document.getElementById('toggleButton').onclick = function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        mainContent.style.marginLeft = '250px';
    } else {
        sidebar.classList.add('collapsed');
        mainContent.style.marginLeft = '0';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    showPage('dashboard');

    const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
    const humidityCtx = document.getElementById('humidityChart').getContext('2d');

    const temperatureChart = new Chart(temperatureCtx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Temperature',
                data: [32, 30, 35, 32, 31, 30, 35],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const humidityChart = new Chart(humidityCtx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Humidity',
                data: [20, 25, 30, 35, 40,],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
function showPage(pageId) {
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });
    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}

function showHiveForm() {
    document.getElementById('hiveForm').style.display = 'block';
}

function addNewHive(event) {
    event.preventDefault();
    const temp = document.getElementById('newTemp').value;
    const humidity = document.getElementById('newHumidity').value;
    const sound = document.getElementById('newSound').value;
    const weight = document.getElementById('newWeight').value;

    const hiveInfo = document.createElement('div');
    hiveInfo.classList.add('hive-info');
    hiveInfo.innerHTML = `
        <h3>New Hive</h3>
        <p>Temperature: <span>${temp}°C</span></p>
        <p>Humidity: <span>${humidity}%</span></p>
        <p>Sound: <span>${sound}</span></p>
        <p>Weight: <span>${weight}kg</span></p>
    `;
    document.getElementById('hives').appendChild(hiveInfo);

    document.getElementById('hiveForm').reset();
    document.getElementById('hiveForm').style.display = 'none';
}

function login() {
    alert("Redirecting to login page...");
    // Implement your login redirection here
}
