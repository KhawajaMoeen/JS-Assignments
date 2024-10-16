// 1.
/*
 var userCity = prompt("Enter your city").toLowerCase()
 
 if(userCity === "karachi"){
     alert(`Welcome to the City of Lights`)
 }
 else{
     alert(`not Found`)
 } 
 */

// 2.
/*
var gender = prompt("Enter your Gender").toLowerCase()

if(gender === "male"){
    alert(`Good Morning Sir`)
}
else if (gender === "female") {
    alert(`Good Morning Ma'am`)
} 
else {
    alert(`Unknown Gender`)
}
*/

// 3.
// var trafficSignalColors = prompt("Enter any Traffic Signal Color").toLowerCase()

// if (trafficSignalColors === "red"){
//     alert(`Must Stop`)
// }
// else if (trafficSignalColors === "yellow") {
//     alert(`Ready to Move`)
// } 
// else if (trafficSignalColors === "green"){
//     alert(`Move Now`)
// }
// else {
//     alert(`You have Entered Wrong Color
// Please Enter the Traffic Signal Color`)
// }

// 4.
// var fuelLeft = prompt("Enter Remaining Fuel in your Vechile in litres").toLowerCase()

// if (fuelLeft === "0.25" || fuelLeft === "quarter"){
//     alert(`Please refill the fuel in your car`)
// }
// else{
//     alert(`Have a Safe Drive :)`);
// }


// 5.

// a)
var a = 4;

// if (++a === 5){
     // alert("given condition for variable a is true");
// }  condition is true

// b)

var b = 82;
// if (b++ === 83){
     // alert("given condition for variable b is true");
// }  condition is false

// c)

var c = 12;
/*
if (c++ === 13){
    // alert("condition 1 is true");
} // condition is false

if (c === 13){
    // alert("condition 2 is true");
} // condition is true

if (++c < 14){
    alert("condition 3 is true");
} // condition is false

if(c === 14){
    alert("condition 4 is true");
} // condition is true
*/

// d)

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// } condition is true

// e)

// if (true){
//     alert("True");
// } conition is True
// if (false){
//     alert("False");
// } condition is False

// f)

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
    

// 6.
/* 
var physicsMarks = +prompt("Enter Physics Marks")
var chemistryMarks = +prompt("Enter Chemistry Marks")
var mathsMarks = +prompt("Enter Maths Marks")

var totalObtainedMarks = physicsMarks + chemistryMarks + mathsMarks

var totalMarksForThreeSubjects = 300

var yourPercentage = (totalObtainedMarks / totalMarksForThreeSubjects) * 100

var gradeOf80Percent = "A-One"
var gradeOf70Percent = "A"
var gradeOf60Percent = "B"
var gradeOfLessThan60Percent = "Fail"

var remarksOf80Percent = "Excellent"
var remarksOf70Percent = "Good"
var remarksOf60Percent = "You Need to Improve"
var remarksOfLessThan60Percent = "Sorry, You are Fail"


document.write(`
MARKSHEET
<br>
<br>
Total Marks: ${totalMarksForThreeSubjects}<br>
Obtained Marks: ${totalObtainedMarks} <br>
Percentage: ${Math.round(yourPercentage)}% <br>

`)

if (yourPercentage >= 100){
    document.write(`Please, Enter Valid Obtained Numbers`)
}
else if (yourPercentage >= 80 ){
    document.write(`
Grade: A-One <br>
Remarks: Excellent`)
}


else if (yourPercentage >= 70){
    document.write(`
Grade: A <br>
Remarks: Good
`)
}

else if (yourPercentage >= 60){
    document.write(`
Grade: B <br>
Remarks: You Need to Improve
`)
}

else if (yourPercentage < 60) {
    document.write(`
Grade: Fail <br>
Remarks: Sorry, You are Fail
`)
}

else{
    document.write(`Enter a Number`)
}
*/

// 7.
/*
var secretNumber = 8

var guessNumber = +prompt("Guess a Number from 1-10")

if (guessNumber == "" || guessNumber > 10){
    alert(`Please Enter a Correct Number`)
}

else if (guessNumber === secretNumber){
    alert(`Bingo! Correct answer`)
}
else if (guessNumber === secretNumber - 1 || guessNumber === secretNumber + 1){
    alert(`Close enough to the correct answer`)
}
else{
    alert(`Try Again`)
}
*/

// 8.
/*
var num = +prompt("Enter any Number")

if (num == ""){
    alert(`Please Enter a Correct Number`)
}
else if (num % 3 === 0){
    alert(`Your Given Number is Divisible by 3`)
}
else{
    alert(`This Number is not the Factor of 3`)
}
*/

// 9.
/*
var num = +prompt("Enter a Number")

if (num == ""){
    alert(`Please Enter a Correct Number`)
}
else if (num % 2 === 0){
    alert(`You have Entered an Even Number`)
}
else{
    alert(`You have Entered an Odd Number`)
}
*/

// 10.
/*
 var temperature = prompt("Enter Temperature")

if (temperature == ""){
    alert(`Please Enter a Correct Number`)
}

else if (temperature > 40){
    alert(`It is too hot outside.`)
}

else if (temperature > 30){
    alert(`The Weather today is Normal.`)
}

else if (temperature > 20){
    alert(`Today’s Weather is cool.`)
}

else if (temperature > 10){
    alert(`OMG! Today’s weather is so Cool.`)
}
else{
    alert(`Enjoy the Weather :)`)
}
*/

// 11.
/*
var firstNumber = +prompt("Enter First Number")
var secondNumber = +prompt("Enter Second Number")

var operation = prompt("Enter Operation that you want to Perform. Either Addition, Subtraction, Multiplication, Division or Remainder.").toLowerCase()

var addition = firstNumber + secondNumber
var subtraction = firstNumber - secondNumber
var multiplication = firstNumber * secondNumber
var division = firstNumber / secondNumber
var remainder = firstNumber % secondNumber

if (operation == "addition"){
    alert(`Your Output is: ${addition}`)
}
else if (operation === "subtraction"){
    alert(`Your Output is: ${subtraction}`)
}
else if (operation === "multiplication"){
    alert(`Your Output is: ${multiplication}`)
}
else if (operation === "division"){
    alert(`Your Output is: ${division}`)
}
else if (operation === "remainder"){
    alert(`Your Output is: ${remainder}`)
}
else{
    alert(`Enter a Valid Number or Operation`)
}
*/




















    



