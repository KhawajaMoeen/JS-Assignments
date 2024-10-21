// 1.
var stdName = []

// 2.
var stdNames = [{}]

// 3 - 6
var strArr = ["a", "b", "c", "d"]
var numArr = [1, 2, 3, 4, 5]
var boolArr = [true, false]
var mixArr = [1, "a", 2, "b", true]

// console.log(`${strArr} String Array,
// ${numArr} Number Array
// ${boolArr} Boolean Array
// ${mixArr} Mixed Array
// ${typeof strArr}`)

// 7.
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// console.log(`
// 1) ${qualifications[0]}
// 2) ${qualifications[1]}
// 3) ${qualifications[2]}
// 4) ${qualifications[3]}
// 5) ${qualifications[4]}
// 6) ${qualifications[5]}
// 7) ${qualifications[6]}
// 8) ${qualifications[7]}
// `);

// 8.
var studentsNames = ["Moeen", "Uhad", "Ali"]
var marksObtainedByStudents = [430, 425, 370]
var totalMarks = 500

var firstStudentPercentage = (marksObtainedByStudents[0] / totalMarks) * 100
var secondStudentPercentage = (marksObtainedByStudents[1] / totalMarks) * 100
var thirdStudentPercentage = (marksObtainedByStudents[2] / totalMarks) * 100

// console.log(`Obtained Marks of ${studentsNames[0]} and he got ${firstStudentPercentage}%
// Obtained Marks of ${studentsNames[1]} and he got ${secondStudentPercentage}%
// Obtained Marks of ${studentsNames[2]} and he got ${thirdStudentPercentage}%`);

// 9.
/*
var color = []

var userFirstColor = prompt("Enter a Color you want to add at the Beginning")
var userLastColor = prompt("Enter a Color you want to add at the End")

color.unshift(userFirstColor)
console.log(color, "color at beginning")

color.push(userLastColor)
console.log(color, "color at the end")

color.unshift("pink", "black")
console.log(color, "two more colors added at beginning")

color.shift()
console.log(color, "removing color from the beginning");

color.pop()
console.log(color, "removing color from the end");

var userDefinedAddIndex = prompt("Enter a position at which you want to add your color")
var colorNameToAdd = prompt("Enter Color name you want to add at the position you have given")

color[userDefinedAddIndex] = colorNameToAdd 
console.log(color, "adding color at user defined position");

var userDefinedRemoveIndex = prompt("Enter a position at which you want to REMOVE your color")
var numberOfColorToRemove = prompt("Enter number/amount of color(s) you want to remove")

color.splice(userDefinedRemoveIndex, numberOfColorToRemove)
console.log(color);
*/

// 10.
var score = [222, 342, 510, 319, 412,292]
score.sort()

// console.log(score);

// 11.
var cities = ["Karachi", "Islamabad", "Lahore", "Sargodha"]
var selectedCities = cities.slice(1, 3)

// console.log(cities, "<br>", selectedCities);

// 12.
var arr = ["This", "is", "my", "bike"]
var str = arr.join(" ")

// console.log(arr, str);

// 13.
var devices = ["Mouse", "Keyboard", "Monitor", "CPU"]

console.log("'FIFO'");


// var firstOut = devices.shift()
// console.log(firstOut, "First In First Out");

// var secondOut = devices.shift()
// console.log(secondOut, "Second In Second Out")

// var thirdOut = devices.shift()
// console.log(thirdOut, "Third In Third Out");

// var lastOut = devices.shift()
// console.log(lastOut, "Last In Last Out");

// 14.
var devices = ["Mouse", "Keyboard", "Monitor", "CPU"]

console.log("'LIFO'");

// var firstLastOut = devices.pop()
// console.log(firstLastOut,  "Last In First Out");

// var secondLastOut = devices.pop()
// console.log(secondLastOut, "Second Last In Second Out");

// var thirdLastOut = devices.pop()
// console.log(thirdLastOut, "Third Last In Third Out");

// var nowFirstOut = devices.pop()
// console.log(nowFirstOut, "First In Last Out");


// for (var i = 4; devices.length - 1 <= i ; i--){
//     console.log(devices.pop());
// }








