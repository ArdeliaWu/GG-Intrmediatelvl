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



let buttonIsClicked = buttonAvg.addEventListener("click", async () => {
    console.log(await firstStarted());
    console.log(await secondStarted());
    console.log(await thirdStarted());
    console.log(await fourthStarted());
    console.log(await getAverageAge());
});

function getAverageAge() {
    const total = Student.reduce((acc, Student) => acc + Student.age, 0);
    let pAvg = document.getElementById("AvgAll");
    let AverageAge = total / Student.length;
    pAvg.innerHTML = "Average Age All Student:" + AverageAge;
    console.log("Average age is" + "" + AverageAge);
    console.log("Third call finished")
}

const firstStarted = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Calculation Start')
        }
            , 5000);
    })
}

const secondStarted = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Second call Start')
        }
            , 2000);
    })
}
const thirdStarted = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Second call finished')
        }
            , 3000);
    })
}

const fourthStarted = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Thrid call Started')
        }
            , 1000);
    })
}
