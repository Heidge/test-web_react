interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Axel",
    lastName: "Gore",
    age: 29,
    location: "Rennes"
};

let student2: Student = {
    firstName: "Romain",
    lastName: "Brobrogniez",
    age: 33,
    location: "Laval"
};

let studentsList: Student[] = [student1, student2];

function tableCreate(studentsList: Student[]) {
    let body = document.body;

    body.innerHTML = "";

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    body.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerText = "First name";
    let heading_2 = document.createElement('th');
    heading_2.innerText = "Last Name";
    let heading_3 = document.createElement('th');
    heading_3.innerText = "Age";
    let heading_4 = document.createElement('th');
    heading_4.innerText = "Location";
	let heading_5 = document.createElement('th');
	heading_5.innerText = "Creation date";
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    for (const data of studentsList) {
        let row = document.createElement('tr');

        let data_1 = document.createElement('td');
        data_1.innerText = data.firstName;
        let data_2 = document.createElement('td');
        data_2.innerText = data.lastName;
        let data_3 = document.createElement('td');
        data_3.innerText = data.age.toString();
        let data_4 = document.createElement('td');
        data_4.innerText = data.location;

        row.appendChild(data_1);
        row.appendChild(data_2);
        row.appendChild(data_3);
        row.appendChild(data_4);

        tbody.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    tableCreate(studentsList);
});
