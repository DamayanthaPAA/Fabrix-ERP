// Assign company to the assigned list
function assignCompany() {
    let activeCompanies = document.getElementById("activeCompanies");
    let assignedCompanies = document.getElementById("assignedCompanies");

    Array.from(activeCompanies.selectedOptions).forEach(option => {
        let newOption = document.createElement("option");
        newOption.text = option.text;
        assignedCompanies.add(newOption);
        activeCompanies.remove(option.index);
    });
}

// Remove assigned company and move it back to active
function removeAssignedCompany() {
    let assignedCompanies = document.getElementById("assignedCompanies");
    let activeCompanies = document.getElementById("activeCompanies");

    Array.from(assignedCompanies.selectedOptions).forEach(option => {
        let newOption = document.createElement("option");
        newOption.text = option.text;
        activeCompanies.add(newOption);
        assignedCompanies.remove(option.index);
    });
}

// Add extended authorization to the list
function addExtendedAuthorization() {
    let deptCode = document.getElementById("departmentCode").value;
    let description = document.getElementById("description").value;
    let allowedDiscount = document.getElementById("allowedDiscount").checked;
    let maxDiscount = document.getElementById("maxDiscount").value;
    let allowedOpenPrice = document.getElementById("allowedOpenPrice").checked;

    if (deptCode && description) {
        let table = document.getElementById("authorizationList");
        let row = table.insertRow();
        row.insertCell(0).innerHTML = deptCode;
        row.insertCell(1).innerHTML = description;
        row.insertCell(2).innerHTML = allowedDiscount ? "Yes" : "No";
        row.insertCell(3).innerHTML = maxDiscount || "N/A";
        row.insertCell(4).innerHTML = allowedOpenPrice ? "Yes" : "No";
    } else {
        alert("Please fill in the department code and description.");
    }
}

// Remove selected authorization from the list
function removeExtendedAuthorization() {
    let table = document.getElementById("authorizationList");
    if (table.rows.length > 0) {
        table.deleteRow(-1);
    } else {
        alert("No rows to remove.");
    }
}
