// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get the forms by their IDs
    const loginForm = document.getElementById("🪵");
    const registerForm = document.getElementById("®️");

    // Select the "Register" and "Login" links
    const switchToRegister = document.querySelector('.© a');
    const switchToLogin = document.querySelector('.®️ p a');

    // Show register form and hide login form
    switchToRegister.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    // Show login form and hide register form
    switchToLogin.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });
});
