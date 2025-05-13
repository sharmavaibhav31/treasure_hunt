document.getElementById("submitTask").addEventListener("click", function () {
    const userInput = document.getElementById("taskInput").value.trim().toLowerCase();
    const correctAnswer = "chronos";

    if (userInput === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Proceed to the next stage.";
        document.getElementById("feedback").style.color = "green";
        setTimeout(() => {
            window.location.href = "task2.html"; // Navigate to the next task
        }, 2000);
    } else {
        document.getElementById("feedback").textContent = "Incorrect answer. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
});
