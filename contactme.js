document.getElementById("submit-form").addEventListener("submit", function (event) {
event.preventDefault(); // Prevent form submission
  
    // Get form values
const fullName = document.getElementById("fullName").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
  
    // Error message elements
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
  
    // Clear previous error messages
fullNameError.textContent = "";
emailError.textContent = "";
messageError.textContent = "";
  
    // Validation flag
let isValid = true;
  
    // Full Name Validation
if (fullName === "") {
    fullNameError.textContent = "Full Name cannot be empty.";
    isValid = false;
} else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
    fullNameError.textContent = "Full Name can only contain letters and spaces.";
    isValid = false;
}
  
    // Email Validation
if (email === "") {
    emailError.textContent = "Email cannot be empty.";
    isValid = false;
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
}
  
    // Message Validation
if (message === "") {
      messageError.textContent = "Message cannot be empty.";
      isValid = false;
}
  
    // If valid, proceed with form submission (here just a console log)
if (isValid) {
      alert("Form submitted successfully!");
      // Handle form submission logic here (e.g., send data to the server).
    }
});
  