fetch("http://localhost:8181/api/getlicenses").then((data) => {
    return data.json();
  }).then((objectData) => {
  let tableData = "";
  objectData.map((values) => {
    tableData +=
      `<tr class="license-row" id="${values.id}">
      <td class="license-row">${values.id}</td>
      <td class="license-row">${values.licenseName}</td>
      <td class="license-row">${values.price}</td>
      <td id="edit-delete-col" class="license-row">
      <button type="button" id="edit-btn${values.id}" value="Edit" class="edit" onclick="editButton(${values.id})">Edit</button>
      <!--<input type="button" id="save-btn${values.id}" value="Save" class="save" onclick="saveRow(${values.id})">-->
      <button type="button"  value="Delete" class="delete" onclick="deleteRow(${values.id})">Delete</button>
      </td>
    </tr>`;
  });
  document.getElementById("table-body").innerHTML = tableData;
  }).catch((error) => console.log(error))










