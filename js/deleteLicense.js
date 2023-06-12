async function deleteRow(id, event) {
  await fetch("https://snowcalculatorbackend-production.up.railway.app/api/deletelicense/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
  })
    .then(response => response.json())
    .then(response => console.log(response))
  event.reload();
}
