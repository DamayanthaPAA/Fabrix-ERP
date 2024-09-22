document.getElementById('companyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const companyCode = document.getElementById('companyCode').value;
  const companyName = document.getElementById('companyName').value;
  const address = document.getElementById('address').value;
  const country = document.getElementById('country').value;
  const baseCurrency = document.getElementById('baseCurrency').value;
  const financialYearStart = document.getElementById('financialYearStart').value;
  const financialYearEnd = document.getElementById('financialYearEnd').value;
  const parentCompany = document.getElementById('parentCompany').value;
  const isSubsidiary = document.getElementById('isSubsidiary').value;
  const webURL = document.getElementById('webURL').value;
  const email = document.getElementById('email').value;
  const remarks = document.getElementById('remarks').value;
  const registerNumber = document.getElementById('registerNumber').value;
  const vatNumber = document.getElementById('vatNumber').value;
  const svatNumber = document.getElementById('svatNumber').value;
  const isActive = document.getElementById('isActive').checked;

  // Save or process the company data as needed
  console.log({
    companyCode, companyName, address, country, baseCurrency,
    financialYearStart, financialYearEnd, parentCompany,
    isSubsidiary, webURL, email, remarks, registerNumber,
    vatNumber, svatNumber, isActive
  });

  alert('Company details saved!');

  // Clear form after submission
  document.getElementById('companyForm').reset();
});

function addAccountNumber() {
  const accountNumberInput = document.getElementById('accountNumbers');
  const accountNumber = accountNumberInput.value;
  
  if (accountNumber) {
    const li = document.createElement('li');
    li.textContent = accountNumber;
    document.getElementById('accountNumbersList').appendChild(li);
    accountNumberInput.value = ''; // Clear input
  }
}
function viewCompany(companyName) {
  alert('Viewing details for ' + companyName);
  // Implement view logic
}

function editCompany(companyName) {
  alert('Editing ' + companyName);
  // Implement edit logic
}

function deleteCompany(companyName) {
  if (confirm('Are you sure you want to delete ' + companyName + '?')) {
    alert(companyName + ' deleted.');
    // Implement delete logic
  }
}

function addAccountNumber() {
  const accountNumberInput = document.getElementById('accountNumbers');
  const accountNumberList = document.getElementById('accountNumbersList');

  if (accountNumberInput.value) {
    const li = document.createElement('li');
    li.textContent = accountNumberInput.value;
    accountNumberList.appendChild(li);
    accountNumberInput.value = ''; // Clear input
  } else {
    alert('Please enter an account number.');
  }
}

