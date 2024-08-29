function calculateAge() {
    // Get the values from the input fields
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value - 1; // Months are zero-indexed in JavaScript Date
    const year = document.getElementById('year').value;

    // Check if inputs are valid
    if (!day || !month || !year) {
        alert('Please enter all fields correctly.');
        return;
    }

    // Create a date object with the user's input
    const birthDate = new Date(year, month, day);
    const today = new Date();

    // Calculate the age in years
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust the years and months if the birth date hasn't occurred yet this year
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Correct for the number of days in the previous month
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display the result
    document.getElementById('result').innerText = `You are ${ageYears} years and ${ageMonths} months old.`;
}
