const form = document.querySelector('#form');
const calculatebtn = document.querySelector('#submitBtn');
const addlicensebtn = document.querySelector('#addlicensebtn');

// Calculates the sum of every license * amount
function getTotal() {
  const allLicenses = document.querySelectorAll('.licenses');
  const allAmounts = document.querySelectorAll('.counter');

  let total = 0;
  for (let i = 0; i < allLicenses.length; i++) {
    if (parseInt(allLicenses[i].value)) {
      total += parseInt(allLicenses[i].value) * allAmounts[i].value;
    }
  }
  document.getElementById("resultText").innerHTML = "" + total;
}

// This seems dumb but if we call getTotal directly from the calculate btn in html it doesnt work
calculatebtn.onclick = (event) => {
  event.preventDefault();
  getTotal();
}

// Creates new license dropdown with the options in it
addlicensebtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Gets the div from the html that we want the input fields to be in
  const formDiv = document.querySelector("#formDiv");

  // Creates a space and then a line and then space again before the new input fields
  //breaks
  const br = document.createElement("br");
  formDiv.appendChild(br);
  const br1 = document.createElement("br");
  formDiv.appendChild(br1);

  const hr = document.createElement("hr");
  formDiv.appendChild(hr);
  const br2 = document.createElement("br");
  formDiv.appendChild(br2);

  // Adds the license label
  const licenseLabel = document.createElement("label");
  licenseLabel.id = "label";
  licenseLabel.htmlFor = "licenses";
  licenseLabel.innerHTML = "Choose a license: ";
  formDiv.appendChild(licenseLabel);

  // Creates the new dropdown
  const dropdown = document.createElement("select");
  dropdown.id = "licenses";
  dropdown.className = "licenses";
  formDiv.appendChild(dropdown);

  // Breaks the line and gives some space between license and amount
  const b3 = document.createElement("br");
  formDiv.appendChild(b3);
  const br4 = document.createElement("br");
  formDiv.appendChild(br4);

  // Creates an empty default option so it looks better (the default select has it too)
  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.id = "defaultOption";
  dropdown.appendChild(defaultOption);

  //Adds the Amount label

  const amountLabel = document.createElement("label");
  amountLabel.id = "label";
  amountLabel.htmlFor = "counter";
  amountLabel.innerHTML = "Amount: ";
  formDiv.appendChild(amountLabel);

  //Creates the amount input field
  let amount = document.createElement("input")
  amount.type = "number";
  amount.id = "counter";
  amount.className = "counter";
  formDiv.appendChild(amount);

  // Dynamically creates the options using the licenses array
    for (let i = 0; i < licenses.length; i++) {
      let option = document.createElement("option");
      option.text = licenses[i].name;
      option.value = licenses[i].price;
      dropdown.appendChild(option);
    }
  })

// Defines the labels and their price
const licenses = [
  {
    "name": "License 1",
    "price": 100
  },
  {
    "name": "License 2",
    "price": 200
  },
  {
    "name": "License 3",
    "price": 300
  }
];

