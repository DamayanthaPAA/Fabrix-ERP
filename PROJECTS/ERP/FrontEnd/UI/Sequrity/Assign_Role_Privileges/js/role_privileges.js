// Select All Privileges Functionality
document.getElementById('selectAllPrivileges').addEventListener('click', function() {
    document.querySelectorAll('.privilege-checkbox').forEach(function(checkbox) {
      checkbox.checked = true;
    });
  });
  
  // Remove All Privileges Functionality
  document.getElementById('removeAllPrivileges').addEventListener('click', function() {
    document.querySelectorAll('.privilege-checkbox').forEach(function(checkbox) {
      checkbox.checked = false;
    });
  });
  
  // Search Module Functionality
  document.getElementById('searchModule').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll('#moduleList tr');
    
    rows.forEach(function(row) {
      let formName = row.cells[0].textContent.toLowerCase();
      if (formName.includes(filter)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
  
  // Privileges Form Submission (for future backend processing)
  document.getElementById('privilegesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let role = document.getElementById('roleSelect').value;
    let privileges = [];
  
    document.querySelectorAll('#moduleList tr').forEach(function(row) {
      let formName = row.cells[0].textContent;
      let addPrivilege = row.querySelector('.add-privilege').checked;
      let editPrivilege = row.querySelector('.edit-privilege').checked;
      let viewPrivilege = row.querySelector('.view-privilege').checked;
      let deletePrivilege = row.querySelector('.delete-privilege').checked;
      let ptintPrivilege = row.querySelector('.print-privilege').checked;
      
      privileges.push({
        formName: formName,
        add: addPrivilege,
        edit: editPrivilege,
        view: viewPrivilege,
        delete: deletePrivilege,
        print: ptintPrivilege
      });
    });
  
    // Example output to console (this can be sent to the backend)
    console.log({
      role: role,
      privileges: privileges
    });
  
    alert('Privileges saved successfully!');
  });
  