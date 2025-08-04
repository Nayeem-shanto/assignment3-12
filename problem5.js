/** Problem 05 - ( PH Email Generator )  */
 var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
// var student= { name: "monu" , roll: 99,department: "eee"  };
// var student= { name: "mewo" , roll: 96 ,department: "cse"  }

//write your code here
// console.log(student);
var sName= student.name;
var sRoll= student.roll;
var sDepartment = student.department;

// console.log(sName,sRoll,sDepartment);
student.address= '@ph.ac.bd';
var sAddress= student.address;
// console.log(student);
console.log(sName+sRoll+sDepartment+sAddress);


