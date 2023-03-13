const postLicenseUrl = "http://localhost:8181/api/createlicense"

async function postLicenseRequest(body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  };

  const response = await fetch(postLicenseUrl, requestOptions);
  return response.json();
}

async function postLicense() {
  const licenseName = document.getElementById("licenseName").value;
  const licensePrice = document.getElementById("price").value;

  const license = {
    "licenseName": licenseName,
    "price": licensePrice
  };

  try {
    const result = await postLicenseRequest(license);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}





