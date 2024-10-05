// Handle Role Assignment
document.getElementById('assignRole').addEventListener('click', function() {
    moveOptions('activeRoles', 'assignedRoles');
  });
  
  document.getElementById('assignAllRoles').addEventListener('click', function() {
    moveAllOptions('activeRoles', 'assignedRoles');
  });
  
  document.getElementById('removeRole').addEventListener('click', function() {
    moveOptions('assignedRoles', 'activeRoles');
  });
  
  document.getElementById('removeAllRoles').addEventListener('click', function() {
    moveAllOptions('assignedRoles', 'activeRoles');
  });
  
  // Move selected options
  function moveOptions(from, to) {
    const fromSelect = document.getElementById(from);
    const toSelect = document.getElementById(to);
  
    Array.from(fromSelect.selectedOptions).forEach(option => {
      toSelect.appendChild(option);
    });
  }
  
  // Move all options
  function moveAllOptions(from, to) {
    const fromSelect = document.getElementById(from);
    const toSelect = document.getElementById(to);
  
    Array.from(fromSelect.options).forEach(option => {
      toSelect.appendChild(option);
    });
  }
  
  // Search functionality for employee dropdown
  document.getElementById('employeeSearch').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const employeeList = document.getElementById('employeeList');
  
    Array.from(employeeList.options).forEach(option => {
      const employeeName = option.text.toLowerCase();
      if (employeeName.includes(searchValue)) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    });
  });
  