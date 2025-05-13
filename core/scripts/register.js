document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const team = document.getElementById("team").value.trim();

    if (name && email && team) {
        // Display success message
        document.getElementById("feedback").textContent = "Registration successful! Redirecting to the first task...";
        document.getElementById("feedback").style.color = "green";

        // Simulate server-side registration and redirect
        setTimeout(() => {
            window.location.href = "task1.html"; // Redirect to the first task
        }, 2000);
    } else {
        // Display error message
        document.getElementById("feedback").textContent = "All fields are required. Please fill out the form.";
        document.getElementById("feedback").style.color = "red";
    }
});
