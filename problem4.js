/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here


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