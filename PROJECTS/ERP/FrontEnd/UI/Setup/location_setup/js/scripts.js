const locations = [];

document.getElementById('locationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const newLocation = {
    code: document.getElementById('locationCode').value,
    name: document.getElementById('locationName').value,
    remarks: document.getElementById('remarks').value,
    address: document.getElementById('address').value,
    telephone: document.getElementById('telephone').value,
    webURL: document.getElementById('webURL').value,
    email: document.getElementById('email').value,
    company: document.getElementById('locationCompany').value,
    type: document.getElementById('locationType').value,
    status: document.getElementById('locationStatus').value,
    manager: document.getElementById('locationManager').value,
    description: document.getElementById('description').value,
    bankAccounts: Array.from(document.querySelectorAll('#bankAccountList li')).map(li => li.textContent),
    plants: Array.from(document.querySelectorAll('#locationsList li.plant')).map(li => ({
      code: li.querySelector('.plantCode').textContent,
      name: li.querySelector('.plantName').textContent,
      address: li.querySelector('.plantAddress').textContent,
      currency: li.querySelector('.plantCurrency').textContent,
      country: li.querySelector('.plantCountry').textContent,
    })),
  };
  
  locations.push(newLocation);
  updateLocationList();
  this.reset();
});

function addBankAccount() {
  const bankAccount = document.getElementById('bankAccount').value;
  if (bankAccount) {
    const li = document.createElement('li');
    li.textContent = bankAccount;
    document.getElementById('bankAccountList').appendChild(li);
    document.getElementById('bankAccount').value = '';
  }
}

function addPlant() {
  const plantCode = document.getElementById('plantCode').value;
  const plantName = document.getElementById('plantName').value;
  const plantAddress = document.getElementById('plantAddress').value;
  const plantCurrency = document.getElementById('plantCurrency').value;
  const plantCountry = document.getElementById('plantCountry').value;

  if (plantCode && plantName) {
    const li = document.createElement('li');
    li.classList.add('plant');
    li.innerHTML = `
      <span class="plantCode">${plantCode}</span> - 
      <span class="plantName">${plantName}</span> - 
      <span class="plantAddress">${plantAddress}</span> - 
      <span class="plantCurrency">${plantCurrency}</span> - 
      <span class="plantCountry">${plantCountry}</span>
      <button onclick="removePlant(this)">Delete</button>
    `;
    document.getElementById('locationsList').appendChild(li);
    document.getElementById('plantCode').value = '';
    document.getElementById('plantName
