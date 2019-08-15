// var student = new Object();
// student.firstName="Alim";
// student.lastName="Agayev";
// student.id=1;
// student.groupNo="P311";
// student.gender=new Object();
// // student.gender={};
// student.gender.id=1;
// student.gender.name="Kisi";
// student.age=20;
// console.log(student);


// using function
let id=0;
let students=[];
// let students=new Array();
function student(firstName,lastName,age,groupNo)
{
    this.id=++id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.groupNo=groupNo;
    this.addCourse=courseAdd;
    this.getFullName=getFullName;

    // releations
    this.courses=[];
}

function courseAdd(courseName)
{
    this.courses.push(courseName);
}

function getFullName()
{
    return `${this.firstName} ${this.lastName}`;
}


// let student1=new student("Alim","Agayev",20,"P311");
// student1.addCourse("Html");
// student1.addCourse("Css");
// students.push(student1);
// let student2=new student("Aga","Resul",18,"P301");
// student2.addCourse("Sql");
// student2.addCourse("C#");
// students.push(student2);

// // console.log(student1);
// // console.log(student2);
// // console.log(student1.firstName+' '+student1.lastName);
// // console.log(students);

// for (let student of students) {
//     console.log(student.getFullName());
// }

// for (let index = 0; index < students.length; index++) {
//     console.log(students[index].getFullName());
// }


window.addEventListener('load',function(){

let student1=new student("Alim","Agayev",20,"P311");
student1.addCourse("Html");
student1.addCourse("Css");
students.push(student1);
let student2=new student("Aga","Resul",18,"P301");
student2.addCourse("Sql");
student2.addCourse("C#");
students.push(student2);

let studentList = document.querySelector('#students');


for (let index = 0; index < students.length; index++) {
    // console.log(students[index].getFullName());
     let option = document.createElement('option');
     option.value=index;
     option.textContent=students[index].getFullName();
     studentList.appendChild(option);
}
});



function selectStudent(el)
{
   let index= el.value;
   console.log(isNaN(index));
   if(isNaN(index))
   {
       alert(`Student secilmeyib`);
       return;
   }

   let student = students[parseInt(index)];
   console.log(student);

}


// function person()
// {
//     var person = new Object();
// person.firstName='';
//     return person;
// }

// var a= new person();
// console.log(a);

var person={
    fullName:"Isgender Sefiyev",
    age: 30
};


// person.fullName="Isgender Sefiyev";
// person.age="30";
console.log(person);


var singlePerson = new function()
{
     this.firstName="Kamran";
     this.lastName="A-eff";
    // return {
    //     fullName:"Isgender Sefiyev",
    //     age: 30
    // };
}

console.log(singlePerson);
console.log(singlePerson);