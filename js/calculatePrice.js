const form = document.querySelector('#form');

// Calculates the sum of every license * amount
function getTotal(event) {
  event.preventDefault();
  const allLicenses = document.querySelectorAll('.licenses');
  const allAmounts = document.querySelectorAll('.counter');

  let total = 0;
  for (let i = 0; i < allLicenses.length; i++) {
    if (parseInt(allLicenses[i].value)) {
      total += parseInt(allLicenses[i].value) * allAmounts[i].value;
    }
  }
  document.getElementById("resultText").innerHTML = `<h3 style="color: green">${total} kr.</h3>`;
}











