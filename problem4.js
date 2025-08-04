/** Problem 04 - (Delete / Store) */
// var fileName= "pdfData.jpg";
//write your code here
/* var fileName= ['pdfData.jpg', 'result.pdf', 'data.docx', '#exp.mp4', 'docx.txt', 'docx.xpdf', 'slipdf.txt'];
console.log(fileName);
console.log(fileName.length); */

var fileName= "docx.pdf";
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
    console.log("Delete");
}