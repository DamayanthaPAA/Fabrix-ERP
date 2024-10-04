const departments = [
    { code: 'HR001', name: 'Human Resources', isActive: true, type: 'Internal' },
    { code: 'FIN002', name: 'Finance', isActive: true, type: 'Internal' },
    { code: 'IT003', name: 'Information Technology', isActive: true, type: 'External' }
  ];
  
  document.getElementById('departmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newDepartment = {
      code: document.getElementById('departmentCode').value,
      name: document.getElementById('departmentName').value,
      isActive: document.getElementById('isActive').checked,
      type: document.querySelector('input[name="deptType"]:checked').value,
    };
    
    departments.push(newDepartment);
    updateDepartmentList();
    this.reset();
  });
  
  function updateDepartmentList() {
    const list = document.getElementById('departmentsList');
    list.innerHTML = '';
    departments.forEach(department => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${department.code} - ${department.name}</span>
        <button onclick="viewDepartment('${department.code}')">View</button>
        <button onclick="editDepartment('${department.code}')">Edit</button>
        <button onclick="deleteDepartment('${department.code}')">Delete</button>
      `;
      list.appendChild(li);
    });
  }
  
  function viewDepartment(code) {
    const department = departments.find(dep => dep.code === code);
    alert(`Viewing department: ${department.code} - ${department.name}`);
  }
  
  function editDepartment(code) {
    const department = departments.find(dep => dep.code === code);
    document.getElementById('departmentCode').value = department.code;
    document.getElementById('departmentName').value = department.name;
    document.getElementById('isActive').checked = department.isActive;
    document.querySelector(`input[name="deptType"][value="${department.type}"]`).checked = true;
  }
  
  function deleteDepartment(code) {
    const index = departments.findIndex(dep => dep.code === code);
    if (index > -1) {
      departments.splice(index, 1);
      updateDepartmentList();
    }
  }
  
  // Initial population of the list
  updateDepartmentList();
  