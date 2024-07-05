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
document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Form Validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = form.querySelector('input[name="name"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            const password = form.querySelector('input[name="password"]').value.trim();

            if (!name || !email || !password) {
                alert('All fields are required!');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address!');
                return;
            }

            form.submit();
        });
    });

    // Notification Dismissal
    const notifications = document.querySelectorAll('.notifications ul li');
    notifications.forEach(notification => {
        notification.addEventListener('click', () => {
            notification.style.display = 'none';
        });
    });

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
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
