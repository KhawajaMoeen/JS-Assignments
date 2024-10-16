// 1 & 2 
var num1 = 20
var num2 = 30

// 1.
var add = num1 + num2

// 2.
var sub = num2 - num1
var multiply = num1 * num2
var divide = num2 / num1
var mod = num2 % num1

// console.log(add, "addition");
// console.log(sub, "subtraction");
// console.log(multiply, "multiplication");
// console.log(divide, "division");
// console.log(mod, "remainder");

// 3.
var num3;

/*
console.log(num3);

num3 = 5
console.log(num3);

num3++;
console.log("incremented value: ", num3);

num3 = num3 + 7
console.log("after addition: " , num3);

num3--;
console.log("decremented value: ", num3);

num3 = num3 % 3
console.log("remainder", num3);
*/

// 4.

var movieTicketPrice = 600
var totalTicketPurchased = 5
var totalAmount = movieTicketPrice * totalTicketPurchased

// console.log(totalAmount);

// 5.
// tableNumber = prompt("Enter any positive integer")

for (var i = 1; i <= 10; i++) {
    // table = tableNumber * i
    // console.log(`${tableNumber} x ${i} = ${table}`);
}

// 6.
var temperatureInCelsius = 32
var temperatureInFahrenheit = (temperatureInCelsius * 9 / 5) + 32

/*
console.log(`${temperatureInCelsius}C is ${temperatureInFahrenheit}F`);

// any html tag works only in document.write
document.write(temperatureInCelsius + "<sup>o</sup>C is " + temperatureInFahrenheit + "<sup>o</sup>F"); 
*/

// 7.
var priceOfItem1 = 80
var quantityOfItem1 = 6
var totalAmountOfItem1 = priceOfItem1 * quantityOfItem1

// console.log(`price of item1 is ${priceOfItem1}`);
// console.log(`Quantity of item1 is ${quantityOfItem1}`);
// console.log(`total price of item 1 is ${totalAmountOfItem1}`);


var priceOfItem2 = 320
var quantityOfItem2 = 8
var totalAmountOfItem2 = priceOfItem2 * quantityOfItem2

// console.log(`price of item2 is ${priceOfItem2}`);
// console.log(`Quantity of item2 is ${quantityOfItem2}`);
// console.log(`total price of item 2 is ${totalAmountOfItem2}`);

var shippingCharges = 150

// console.log(`shipping charges is ${shippingCharges}`);

var totalShoppingAmount = totalAmountOfItem1 + totalAmountOfItem2 + shippingCharges

// console.log(`Total Amount of shopping is ${totalShoppingAmount}` );

// 8. 
var totalMarks = 1100
var obtainedMarks = 850

var percentage = (obtainedMarks/totalMarks) * 100

// console.log(`Obtained Marks: ${obtainedMarks}
// Total Marks: ${totalMarks}
// Percentage: ${percentage}` );

// 9.
var dollar = 10
var riyal = 25

var pakistaniRuppee = (dollar * 104.80) + (riyal * 28)

// console.log(`Total Currency in PKR: ${pakistaniRuppee}`);

// 10.
var number = 30

var operation = ((number + 5) * 10) /2

// console.log(operation);

// 11.
var currentYear = 2024
var firstBirthYear = 2002
var secondBirthYear = 2001

var age1 = currentYear - firstBirthYear
var age2 = currentYear - secondBirthYear

// console.log(`They are either ${age1} or ${age2} Years old`);

// 12.
var radiusOfCircle = 2
var circumferenceOfCircle = 2 * 3.142 * radiusOfCircle
var areaOfCircle = 3.142 * (radiusOfCircle**2)

// console.log(`the Circumference of a Cicle is: ${circumferenceOfCircle}
// and Area of a Circle is: ${areaOfCircle} 
// when Radius of Circle is: ${radiusOfCircle}`);

// 13.
var favSnack = "Chocolato"
var currentAge = age1
var maximumAge = age1 + 30
var amountOfSnackPerDay = 3

console.log(`Current Age: ${currentAge}
Estimated Maximum Age: ${maximumAge}
Quantity of Snack to eat per day: ${amountOfSnackPerDay}
You will need ${((maximumAge - currentAge) * amountOfSnackPerDay)} ${favSnack}s to last you until the ripe old age of ${maximumAge} `);





