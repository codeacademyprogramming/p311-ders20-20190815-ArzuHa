window.addEventListener('load', function () {
    loadData();
});

let id = 0;
let students = [];

function student(firstName, lastName, groupNo) {
    this.id = ++id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.groupNo = groupNo;
}

function addStudent() {
    let name, surname, grupNo;
    name = document.getElementById('name').value;
    surname = document.getElementById('surname').value;
    groupNo = document.getElementById('groupNo').value;

    let student1 = new student(name, surname, groupNo);
    students.push(student1);
    // var stuJson = JSON.stringify(student1);
    // console.log(stuJson);
    // console.log(student1);

    // var stuJson = JSON.stringify(students);
    // console.log(stuJson);
    // console.log(students);

    addToTable(student1);
}

function addToTable(student) {
    let tBody = document.querySelector('#students > tbody');
    let tr = document.createElement('tr');

    let tdId = document.createElement('th');
    tdId.textContent = student.id;
    tr.appendChild(tdId);

    let tdName = document.createElement('td');
    tdName.textContent = student.firstName;
    tr.appendChild(tdName);

    let tdSurName = document.createElement('td');
    tdSurName.textContent = student.lastName;
    tr.appendChild(tdSurName);

    let tdGroupNo = document.createElement('td');
    tdGroupNo.textContent = student.groupNo;
    tr.appendChild(tdGroupNo);

    tBody.appendChild(tr);
}

function saveData() {
    let stList = JSON.stringify(students);
    localStorage.setItem('students', stList);
}

function loadData() {
  try {
    let tBody = document.querySelector('#students > tbody');
    tBody.innerHTML='';

    //   let stList=JSON.stringify(students);
    let stList = localStorage.getItem('students');
    students=JSON.parse(stList);
    var ids= students.map(function(item,index)
    {
        addToTable(item);
        return item.id;
    });
  
    id=Math.max(...ids);
  } catch (error) {
    students=[];
  }


}

function getStudents()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         console.log(this);
        if (this.readyState == 4 && this.status == 200) {
        //  console.log(this.responseText);
         console.log(JSON.parse(this.responseText));
        }
      };
      xhttp.open("GET", "students.json", true);
      xhttp.send();
      console.log('end');
}