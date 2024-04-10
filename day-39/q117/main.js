"use strict";
function printGradeMessage(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent !");
            break;
        case "B":
            console.log("Well done !");
            break;
        case "C":
            console.log("Good job !");
            break;
        case "D":
            console.log("Satisfactory !");
            break;
        case "F":
            console.log("failed !");
            break;
        default:
            console.log("Invalid Grade");
    }
}
printGradeMessage("B");
printGradeMessage("D"); 

 // Well done !
 // Satisfactory !