/** Problem 04 - (Delete / Store) */
var fileName= "docx.txt";
//write your code here


// console.log(fileName);
if(fileName.includes('#')){
    console.log("Store");
}
else if(fileName.includes('.pdf')){
    console.log("Store")
}
else if(fileName.includes('.docx')){
    console.log("Store")
}
else{
    console.log("Delete")
}