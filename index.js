
//function that prompts the user to input student marks and displays the marks and grade on an alert 
const consoleInput = prompt("Enter Student Marks"); 
//taking in marks and returning if the conditions are met 
function promptFunc(marks) { if (marks >= 79 && marks <= 100) { return "A"; } 
else if (marks >= 60 && marks <= 79) { return "B"; } 
else if (marks >= 49 && marks <= 59) { return "C"; } 
else if (marks >= 40 && marks <= 49) { return "D"; } 
else if (marks < 40) { return "E"; } 
else { return "Invalid Input"; } }
 // calling the function on taking in marks 
 const grade = promptFunc(parseInt(consoleInput)); //displaying marks on the page and grade with an alert
  alert(`your student marks: ${consoleInput}\n Grade: ${grade}`);