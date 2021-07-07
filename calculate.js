const Student = [
    { name: "Aulia", age: 28 },
    { name: "Albert", age: 20 },
    { name: "Agus", age: 21 }
];

let viewtbl = document.getElementById("viewTable");
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");

for (let i = 0; i < Student.length; i++) {
    let row = document.createElement("tr");
    let cell = document.createElement("td")
    let cellText = document.createTextNode(Student[i].name + "  ||" + Student[i].age);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);
}

tbl.appendChild(tblBody);
viewtbl.appendChild(tbl);
tbl.setAttribute("border", "1");

buttonAvg.addEventListener("click", () => {
    const total = Student.reduce((acc, Student) => acc + Student.age, 0);
    let pAvg = document.getElementById("AvgAll");
    pAvg.innerHTML = "Average Age All Student:" + total / Student.length;

});