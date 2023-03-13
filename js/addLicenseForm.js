const addlicensebtn = document.querySelector('#addlicensebtn');

// Creates new license dropdown with the options in it
addlicensebtn.addEventListener("click", function (event) {


  // Gets the div from the html that we want the input fields to be in
  const formDiv = document.querySelector(".formDiv");

  const br = document.createElement("br");
  formDiv.appendChild(br);
  const br1 = document.createElement("br");
  formDiv.appendChild(br1);

  const hr = document.createElement("hr");
  formDiv.appendChild(hr);


  const br4 = document.createElement("br");
  formDiv.appendChild(br4);

  // Adds the license label
  const licenseLabel = document.createElement("label");
  licenseLabel.className = "label";
  licenseLabel.id = "label";
  licenseLabel.htmlFor = "licenses";
  licenseLabel.innerHTML = "Choose a license: ";
  formDiv.appendChild(licenseLabel);

  const br7 = document.createElement('br');
  formDiv.appendChild(br7)

  // Creates the new dropdown
  const dropdown = document.createElement("select");
  dropdown.className = "licenses";
  dropdown.id = "licenses";
  formDiv.appendChild(dropdown);

  // Breaks the line and gives some space between license and amount
  const br5 = document.createElement("br");
  formDiv.appendChild(br5);
  const br6 = document.createElement("br");
  formDiv.appendChild(br6);

  const amountLabel = document.createElement("label");
  amountLabel.id = "label";
  amountLabel.className = "label";
  amountLabel.htmlFor = "counter";
  amountLabel.innerHTML = "Amount: ";
  formDiv.appendChild(amountLabel);

  const br8 = document.createElement('br');
  formDiv.appendChild(br8)

  //Creates the amount input field
  let amount = document.createElement("input")
  amount.type = "number";
  amount.className = "counter";
  amount.id = "counter";
  formDiv.appendChild(amount);
  event.preventDefault();

  fillLicenses(event);
})
