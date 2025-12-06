let employees = JSON.parse(localStorage.getItem('employees') || '[]');


function saveData() {
localStorage.setItem('employees', JSON.stringify(employees));
}


// CREATE
function createRecord() {
let id = c_id.value;
let name = c_name.value;
if (!id || !name) return createMsg.innerHTML = `<span class='text-danger'>All fields required!</span>`;
employees.push({ id, name });
saveData();
createMsg.innerHTML = `<span class='text-success'>Record Saved!</span>`;
c_id.value = ""; c_name.value = "";
}


// UPDATE
function findUpdate() {
let id = u_search.value;
let emp = employees.find(e => e.id === id);
if (!emp) return updateForm.innerHTML = `<span class='text-danger'>No record found!</span>`;
updateForm.innerHTML = `
<label>Employee Name:</label>
<input id='u_name' class='form-control mb-2' value='${emp.name}'>
<button class='btn btn-success mt-2' onclick="updateRecord('${emp.id}')">Update</button>
`;
}


function updateRecord(id) {
let emp = employees.find(e => e.id === id);
emp.name = document.getElementById("u_name").value;
saveData();
updateForm.innerHTML = `<span class='text-success'>Update Successful!</span>`;
}


// DELETE
function deleteRecord() {
let id = d_id?.value;
let index = employees.findIndex(e => e.id === id);
if (index === -1) return deleteMsg.innerHTML = `<span class='text-danger'>No record found!</span>`;
employees.splice(index, 1);
saveData();
deleteMsg.innerHTML = `<span class='text-success'>Successfully Deleted!</span>`;
}


// SEARCH
function searchRecord() {
let id = s_id.value;
let emp = employees.find(e => e.id === id);
if (!emp) return searchMsg.innerHTML = `<span class='text-danger'>No record found!</span>`;
searchMsg.innerHTML = `<span class='text-info'>ID: ${emp.id}<br>Name: ${emp.name}</span>`;
}


// DISPLAY ALL
function displayAll() {
let out = document.getElementById("displayOutput");
if (!out) return;
if (employees.length === 0) return out.innerHTML = `<span class='text-warning'>No records found.</span>`;


let html = "<div class='card p-3 dark-card'><h4>Employee List</h4>";
employees.forEach(e => html += `ID: ${e.id} — Name: ${e.name}<br>`);
html += "</div>";
out.innerHTML = html;
}