// 1.
var multiDimensionalArray = [[]]

// console.log(multiDimensionalArray);

// 2.

var matrixArray = [[0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

// console.log(matrixArray.join(" "));

// 3.
// for (var i = 1; i <= 10; i++){
//     console.log(i);    
// }

// 4.
// var tableNumber = +prompt("Enter a Number to show its Table")
// var tableLength = +prompt("Enter the Length of the Table")

// for (let i = 1; i <= tableLength; i++){
//     table = tableNumber * i
//     console.log(`${tableNumber} x ${i} = ${table}`);   
// }

// 5.
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// 6.
/*
console.log("Counting: ");
for (let i = 1; i <= 15; i++){
    console.log(i);    
}

console.log("Reverse: ");
for (let i = 10; i >= 1; i--){
    console.log(i)
}
console.log("Even: ");
for (let i = 0; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}
console.log("Odd: ");
for (let i = 1; i <= 20; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}
console.log("Series: ");
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i + 'k');
    }
}
*/

// 7.
/*
var snacks = ["cake", "apple pie", "cookie", "chips", "patties"]
var userSnack = prompt("Enter a Snack")

var flag = "No"

for (let i = 0; i <= snacks.length; i++){
    if (userSnack===snacks[i]) {
        console.log(`${snacks[i]} is available at index ${i} in our Bakery`);
        flag = "Yes"
    }
}
if (flag !== "Yes"){
    console.log(`We are Sorry. ${userSnack} is not Available at our Bakery`);
}
*/

var A = [24, 53, 78, 91, 12]

// for (let i = 0; i < A.length; i++){
    //     console.log(A[i], largest);
    
// }

var largest = Math.max(...A)
var smallest = Math.min(...A)
// console.log(`Largest Number: ${largest} and Smallest Number: ${smallest}`);

// for (let i = 1; i <= 20; i++){
//     console.log(5*i);
// }


