document.getElementById('userRoleForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Extract role form data
    const roleCode = document.getElementById('roleCode').value;
    const roleName = document.getElementById('roleName').value;
    const roleDescription = document.getElementById('roleDescription').value;
  
    // Checkboxes for privileges
    const privileges = [];
    document.querySelectorAll('#rolePrivileges input[type="checkbox"]').forEach(function (checkbox) {
      if (checkbox.checked) {
        privileges.push(checkbox.nextElementSibling.textContent);
      }
    });
  
    // Output role data (this can be modified to send to the server)
    console.log({ roleCode, roleName, roleDescription, privileges });
  
    // Add role to the list (for demo purposes, this can be updated with server communication logic)
    const rolesList = document.getElementById('rolesList');
    const row = `<tr>
      <td>${roleCode}</td>
      <td>${roleName}</td>
      <td>${roleDescription}</td>
      <td>
        <button class="btn btn-sm btn-info">View</button>
        <button class="btn btn-sm btn-warning">Edit</button>
        <button class="btn btn-sm btn-danger">Delete</button>
      </td>
    </tr>`;
    
    rolesList.innerHTML += row;
  
    // Clear the form
    document.getElementById('userRoleForm').reset();
  });
  