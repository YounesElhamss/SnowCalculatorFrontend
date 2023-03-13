function editButton(id) {
  const content =
    "<div class='modal-content'>" +
    "<div class='modal-header'>" +
    "<span class='close'>&times;</span>" +
    "</div>" +
    "<div class='modal-body'>" +
    "<div class='formDiv'>" +
    "<form class='form'>" +

    "<h5 class='h5label'>Edit license</h5>" +
    "<label class='label' id='label' for='licenseName'>License Name:</label>" +
    "<br>" +
    "<input id='modal-input-name' type='text'>" +
    "<br><br>" +
    "<label class='label' for='price'>Price:</label>" +
    "<br>" +
    "<input id='modal-input-price' type='number'>" +
    "<br><br>" +
    `<button onclick='saveEditLicense(${id})' class="submitBtn" id='modal-save-btn'>Save</button>` +

    "</form></div></div><div class='modal-footer'><h3>Modal Footer</h3></div></div>";

  document.getElementById("myEditModal").innerHTML = content;

// Get the modal
  const modal = document.getElementById("myEditModal");

// Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}


/*
function editLicense(id){

  // Get the modal
  const modal = document.getElementById("myEditModal");

// Get the button that opens the modal
  const btn = document.getElementById(`edit-btn${id}`);

// Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  saveEditLicense(id);
}

 */

function saveEditLicense(id) {
  const license = {
    "licenseName": document.getElementById("modal-input-name").value,
    "price": document.getElementById("modal-input-price").value
  }

  fetch("http://localhost:8181/api/updatelicense/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(license)
  }).then((res) => console.log(res.status))

}























