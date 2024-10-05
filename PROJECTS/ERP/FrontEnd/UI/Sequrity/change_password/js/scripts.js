document.getElementById("changePasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let currentPassword = document.getElementById("currentPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    // Basic form validation
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
  
    // Add your password change logic here (e.g., API call to update password)
  
    alert("Password changed successfully!");
    // You can redirect the user or reset the form after successful password change
  });
  