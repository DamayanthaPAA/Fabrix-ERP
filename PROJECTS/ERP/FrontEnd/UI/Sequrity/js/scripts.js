// Function to navigate between pages
function navigateTo(section) {
    alert(`Navigating to ${section} page...`);
    // Here you can set the actual navigation using window.location.href
    // Example: window.location.href = section + '.html';
  }
  
  // Simulated data for users, roles, and privileges
  let users = [];
  let roles = [];
  let rolePrivileges = {};
  
  // Function to create a new user
  function createUser(username, email, role) {
    if (!username || !email || !role) {
      alert("Please fill out all fields!");
      return;
    }
    users.push({ username, email, role });
    alert(`User ${username} created successfully!`);
    displayUsers();
  }
  
  // Function to display the list of users
  function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the list
    users.forEach(user => {
      let listItem = document.createElement('li');
      listItem.innerHTML = `${user.username} - ${user.email} - Role: ${user.role} 
        <button onclick="editUser('${user.username}')">Edit</button> 
        <button onclick="deleteUser('${user.username}')">Delete</button>`;
      userList.appendChild(listItem);
    });
  }
  
  // Function to edit a user
  function editUser(username) {
    let user = users.find(u => u.username === username);
    if (user) {
      let newEmail = prompt(`Update email for ${username}`, user.email);
      if (newEmail) {
        user.email = newEmail;
        alert(`User ${username}'s email updated successfully!`);
        displayUsers();
      }
    }
  }
  
  // Function to delete a user
  function deleteUser(username) {
    users = users.filter(user => user.username !== username);
    alert(`User ${username} deleted!`);
    displayUsers();
  }
  
  // Function to create a new role
  function createRole(roleName) {
    if (!roleName) {
      alert("Please enter a role name.");
      return;
    }
    roles.push(roleName);
    alert(`Role ${roleName} created successfully!`);
    displayRoles();
  }
  
  // Function to display the list of roles
  function displayRoles() {
    const roleList = document.getElementById('roleList');
    roleList.innerHTML = ''; // Clear the list
    roles.forEach(role => {
      let listItem = document.createElement('li');
      listItem.innerHTML = `${role} 
        <button onclick="editRole('${role}')">Edit</button> 
        <button onclick="deleteRole('${role}')">Delete</button>`;
      roleList.appendChild(listItem);
    });
  }
  
  // Function to edit a role
  function editRole(roleName) {
    let newRoleName = prompt(`Update name for role ${roleName}`, roleName);
    if (newRoleName) {
      roles = roles.map(role => role === roleName ? newRoleName : role);
      alert(`Role name updated to ${newRoleName}`);
      displayRoles();
    }
  }
  
  // Function to delete a role
  function deleteRole(roleName) {
    roles = roles.filter(role => role !== roleName);
    alert(`Role ${roleName} deleted!`);
    displayRoles();
  }
  
  // Function to assign privileges to roles
  function assignPrivileges(role, privileges) {
    if (!role || !privileges.length) {
      alert("Please select a role and privileges.");
      return;
    }
    rolePrivileges[role] = privileges;
    alert(`Privileges assigned to role: ${role}`);
    displayRolePrivileges();
  }
  
  // Function to display the list of role privileges
  function displayRolePrivileges() {
    const rolePrivilegesList = document.getElementById('rolePrivilegesList');
    rolePrivilegesList.innerHTML = ''; // Clear the list
    for (let role in rolePrivileges) {
      let listItem = document.createElement('li');
      listItem.innerHTML = `${role}: ${rolePrivileges[role].join(', ')}
        <button onclick="editPrivileges('${role}')">Edit</button>
        <button onclick="deletePrivileges('${role}')">Delete</button>`;
      rolePrivilegesList.appendChild(listItem);
    }
  }
  
  // Function to edit privileges for a role
  function editPrivileges(role) {
    let newPrivileges = prompt(`Update privileges for ${role}`, rolePrivileges[role].join(', '));
    if (newPrivileges) {
      rolePrivileges[role] = newPrivileges.split(',').map(priv => priv.trim());
      alert(`Privileges updated for role ${role}`);
      displayRolePrivileges();
    }
  }
  
  // Function to delete privileges for a role
  function deletePrivileges(role) {
    delete rolePrivileges[role];
    alert(`Privileges for role ${role} deleted!`);
    displayRolePrivileges();
  }
  
  // Function to change user password (simulated)
  function changePassword(oldPassword, newPassword) {
    if (!oldPassword || !newPassword) {
      alert("Please fill out both fields.");
      return;
    }
    alert("Password changed successfully!"); // In real scenario, validate old password and change it
  }
  