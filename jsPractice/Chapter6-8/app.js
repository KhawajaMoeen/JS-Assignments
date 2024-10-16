// 1.
var num1  = 12

/*
console.log(`Result:
The value of num1 is: ${num1}
................................

The value of ++num1 is: ${++num1}
Now the value of num1 is: ${num1}

The value of num1++ is: ${num1++}
Now the value of num1 is: ${num1}

The value of --num1 is: ${--num1}
Now the value of num1 is: ${num1}

The value of num1-- is: ${num1--}
Now the value of num1 is: ${num1}`);
*/

//2.
var a = 2
var b = 1

// var result =  --a - --b + ++b + b--;

// console.log(`a is ${a}
// b is ${b}
// and result is ${result}`);

// 3.
// var userName = prompt("Enter your Name")
// console.log(`Greetings ${userName}`);

// 5.

/*
var tableNumber = prompt("Enter a positive integer  number")

for(let i = 1; i <= 10; i++){
    if(tableNumber === ""){
        myTable = 5 * i
        console.log(`5 x ${i} = ${myTable}`);
    }
    else{
        console.log(`${tableNumber} x ${i} = ${tableNumber * i}`)
}
}
*/

// 6.
var firstSubjectName = prompt("Enter first subject Name") 
var secondSubjectName = prompt("Enter second subject Name") 
var thirdSubjectName = prompt("Enter third subject Name") 

var obtMarksOfFirstSubject = +prompt(`Enter ${firstSubjectName} Obtained Marks`)
var obtMarksOfSecondSubject = +prompt(`Enter ${secondSubjectName} Obtained Marks`)
var obtMarksOfThirdSubject = +prompt(`Enter ${thirdSubjectName} Obtained Marks`)

var totalObtainedMarks = obtMarksOfFirstSubject + obtMarksOfSecondSubject + obtMarksOfThirdSubject

var totalMarksForAnySubject = 100
var totalNumbersOfSubjects = 3

var totalMarksForAllSubject = totalMarksForAnySubject * totalNumbersOfSubjects

var fisrtSubjectPercentage = (obtMarksOfFirstSubject/totalMarksForAnySubject) * 100
var secondSubjectPercentage = (obtMarksOfSecondSubject/totalMarksForAnySubject) * 100
var thirdSubjectPercentage = (obtMarksOfThirdSubject/totalMarksForAnySubject) * 100

var yourTotalPercentage = (fisrtSubjectPercentage + secondSubjectPercentage + thirdSubjectPercentage) / 3

document.write(`
<table>
<tr>
    <th>Subjects</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
</tr>

<tr>
    <td>${firstSubjectName}</td>
    <td>${totalMarksForAnySubject}</td>
    <td>${obtMarksOfFirstSubject}</td>
    <td>${fisrtSubjectPercentage}%</td>
</tr>

<tr>
    <td>${secondSubjectName}</td>
    <td>${totalMarksForAnySubject}</td>
    <td>${obtMarksOfSecondSubject}</td>
    <td>${secondSubjectPercentage}%</td>
</tr>

<tr>
    <td>${thirdSubjectName}</td>
    <td>${totalMarksForAnySubject}</td>
    <td>${obtMarksOfThirdSubject}</td>
    <td>${thirdSubjectPercentage}%</td>
</tr>

<tr>
    <th>Total</th>
    <td>${totalMarksForAllSubject}</td>
    <td>${totalObtainedMarks}</td>
    <td>${yourTotalPercentage}%</td>
</tr>
</table>
`)






 



