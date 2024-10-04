document.getElementById('classForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const classCode = document.getElementById('classCode').value;
    const className = document.getElementById('className').value;
    const isActive = document.getElementById('isActive').checked ? 'Active' : 'Inactive';
  
    // Simulating adding a class (you can replace with actual logic)
    const classList = document.getElementById('classList');
    const newClass = document.createElement('li');
    newClass.innerHTML = `
      <span>Class Code: ${classCode} - Class Name: ${className} (${isActive})</span>
      <button onclick="viewClass('${classCode}')">View</button>
      <button onclick="editClass('${classCode}')">Edit</button>
      <button onclick="deleteClass('${classCode}')">Delete</button>
    `;
    classList.appendChild(newClass);
  
    // Reset the form after adding
    document.getElementById('classForm').reset();
  });
  
  function viewClass(classCode) {
    alert('Viewing class: ' + classCode);
  }
  
  function editClass(classCode) {
    alert('Editing class: ' + classCode);
  }
  
  function deleteClass(classCode) {
    alert('Deleting class: ' + classCode);
  }
  