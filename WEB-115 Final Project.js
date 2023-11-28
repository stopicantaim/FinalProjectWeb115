document.addEventListener('DOMContentLoaded', function () {
    generateMealPlanRows();
    document.getElementById('generatePlan').addEventListener('click', generateMealPlan);
    document.getElementById('clearPlan').addEventListener('click', clearPlanner);
    // Other event listeners like print and download will go here
});

function generateMealPlanRows() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const mealTimes = ['Breakfast', 'Snack', 'Lunch', 'Snack', 'Dinner'];

    let tableBody = document.querySelector('#mealPlanForm .meal-plan table tbody');
    daysOfWeek.forEach(day => {
        let row = tableBody.insertRow();
        row.insertCell().textContent = day;

        mealTimes.forEach(() => {
            let cell = row.insertCell();
            let input = document.createElement('input');
            input.type = 'text';
            cell.appendChild(input);
        });
    });
}

function generateMealPlan() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let goal = document.getElementById('goal').value;

    // Validate Email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Code to generate the meal plan on a new page goes here
    // Use document.write() or another method to display the user's input
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function clearPlanner() {
    document.getElementById('mealPlanForm').reset();
    // Additional code to reset any dynamically generated content can go here
}

// Implement the printPlanner and downloadPlanner functionalities here
