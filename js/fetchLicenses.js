async function fetchAllLicenses() {
  return await fetch("https://snowcalculatorbackend-production.up.railway.app/api/getlicenses").then(response => response.json())
}

mapLicenses();

const licenseMap = new Map();

async function mapLicenses() {
  const licensesList = await fetchAllLicenses();
  licensesList.forEach(license => {
    licenseMap.set(license.licenseName, license.price)
  })
}

function fillLicenses(event) {
  const licenseDropdown = document.querySelectorAll(".licenses");

  for (let i = 0; i < licenseDropdown.length; i++) {
    for (const key of licenseMap.keys()) {
      const option = document.createElement("option");
      option.textContent = key;
      option.value = licenseMap.get(key);
      licenseDropdown[i].appendChild(option);
    }
    event.preventDefault();
  }
}


