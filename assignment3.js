
/** Problem -01 ( Divide the Asset ) */ 
var area = 800;
var numOfBrother = 2;
var landReceived =(area/numOfBrother);
console.log(landReceived);

/** Problem -02 ( Cycle or Laptop ) */

var money = 25000;

if(money >= 25000){
    console.log("Laptop")
}
else if(money >= 10000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */

var lastDay = 11 ;

for(var i=1; i<=lastDay; i++){
    if(i%3 ===0){
        console.log(i, '-', 'medicine');
    }
    else{
        console.log(i, '-', 'rest');
    }
}

/** Problem 04 - (Delete / Store) */

var fileName= "pdfData.jpg";

// console.log(fileName);
// if((fileName.includes('#')) || (fileName.endsWith('pdf'))|| (fileName.endsWith('docx'))){
//     console.log("Store");
// }
if(fileName.startsWith('#')){
    console.log("Store");
}
else if(fileName.endsWith('pdf')){
    console.log("Store");
}
else if(fileName.endsWith('docx')){
    console.log("Store");
}
else{
    console.log("Delete")
}


/** Problem 05 - ( PH Email Generator )  */

 var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
// var student= { name: "monu" , roll: 99,department: "eee"  };
// var student= { name: "mewo" , roll: 96 ,department: "cse"  }

// console.log(student);
var sName= student.name;
var sRoll= student.roll;
var sDepartment = student.department;

// console.log(sName,sRoll,sDepartment);
student.address= '@ph.ac.bd';
var sAddress= student.address;
// console.log(student);
console.log(sName+sRoll+sDepartment+sAddress);


/** Problem 06 :  (Current Salary )  */

var experience = 30;
var startingSalary = 45000;
var increment= 0.05;
var currentSalary = startingSalary;

for(let i=1; i<=experience; i++){
    currentSalary= (currentSalary+(currentSalary* increment));
}
console.log(currentSalary.toFixed(2));