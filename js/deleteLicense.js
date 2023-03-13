async function deleteRow(id, event) {
  await fetch("http://localhost:8181/api/deletelicense/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
  })
    .then(response => response.json())
    .then(response => console.log(response))
  event.reload();
}
