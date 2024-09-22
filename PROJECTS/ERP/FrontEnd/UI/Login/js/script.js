// Login form submission handler
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // TO DO: implement login logic here
  console.log("Login form submitted with username:", username, "and password:", password);
});

// Register form submission handler
document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  // TO DO: implement register logic here
  console.log("Register form submitted with username:", username, "email:", email, "password:", password, "and confirm password:", confirmPassword);
});