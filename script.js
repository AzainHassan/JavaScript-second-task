//? Question 1
// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));

// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);

//? Question 2
// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));
// var result = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + result);

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));
// var result = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + result);

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));
// var result = num1 - num2;
// document.write("Subraction of " + num1 + " and " + num2 + " is " + result);

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));
// var result = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + result);

//? Question 3
// var hello;
// document.write('Value after variable declaration is undefined <br>');

// var hello = 12;
// document.write('Initial value: ' + hello + '<br>');

// hello++;
// document.write('Value after increment: ' + hello + '<br>');

// var hello = hello + 7;
// document.write('Value after addition: ' + hello + '<br>');

// hello--;
// document.write('Value after decrement: ' + hello + '<br>');

// var hello = hello % 3;
// document.write('The remainder is: ' + hello + '<br>');

//? Question 4
// var ticketPrice = 600;
// var fiveTicketCost = ticketPrice * 5;

// document.write('Total cost to buy 5 tickets to movie is ' + fiveTicketCost + 'PKR');

//? Question 6
// var tempCelsius = 32;
// var convertFahrenheit = (tempCelsius * 9/5) + 32;
// document.write(tempCelsius + 'C is ' + convertFahrenheit + 'F' + '<br>');

// var tempFahrenheit = 68;
// var convertCelsius = (tempFahrenheit - 32) * 5/9;
// document.write(tempFahrenheit + 'F is ' + convertCelsius + 'C');

//? Question 7
// document.write("<h1>Shopping Cart</h1>");
// var itemOnePrice = parseInt(prompt("Enter the First item price."));
// var itemOneQuantity = parseInt(prompt("Enter the order quantity of First item."));
// document.write('Price of item One: ' + itemOnePrice + "<br>");
// document.write('Quantity of item One: ' + itemOneQuantity + "<br>");

// var itemSecondPrice = parseInt(prompt("Enter the Second item price."));
// var itemSecondQuantity = parseInt(prompt("Enter the order quantity of Second item."));
// document.write('Price of item Two: ' + itemSecondPrice + "<br>");
// document.write('Quantity of item Two: ' + itemSecondQuantity + "<br>");

// var shippingCharges = 100;
// document.write('Shipping Charges: ' + shippingCharges + "<br><br>");

// var totalBillOne = itemOnePrice * itemOneQuantity;
// var totalBillTwo = itemSecondPrice * itemSecondQuantity; 

// var totalBill = totalBillOne + totalBillTwo + shippingCharges;
// document.write("Total cost of your order is " + totalBill)

//? Question 8
// document.write("<h1>Mark Sheet</h1>");
// var totalMarks = parseInt(prompt("Enter the total marks."));
// document.write("Total marks: " + totalMarks + "<br>");

// var obtainedMarks = parseInt(prompt("Enter the obtained marks."));
// document.write("Marks obtained: " + obtainedMarks + "<br>");

// var Percentage = (obtainedMarks/totalMarks) * 100;
// document.write("Percentage: " + Percentage);

//? Question 9
// document.write("<h1>Currency in PKR</h1>");
// var usDollar = 104.80;
// var saudiRiyal = 28;

// var convertCurrency = (10 * usDollar) + (25 * saudiRiyal);
// document.write("Total Currency in PKR: " + convertCurrency);

//? Question 10
// var userNum = parseInt(prompt("Enter the number."));
// var calulation = (userNum + 5) * 10 / 2;

// document.write("Result is " + calulation);

//? Question 11
// document.write("<h1>Age Calculator</h1>");
// var currentYear = parseInt(prompt("Enter the current year."));
// document.write("Current Year: " + currentYear + "<br>");

// var birthYear = parseInt(prompt("Enter the Birth year."));
// document.write("Birth Year: " + birthYear + "<br>");

// var yourAge = currentYear - birthYear;
// document.write("Your Age is: " + yourAge);

//? Question 12
// document.write("<h1>The Geometrizer</h1>");
// var radius = parseInt(prompt("Enter the circle radius."));
// document.write("Radius of a circle: " + radius + "<br>");

// var circumCal = 2 * 3.142 * radius;
// document.write("The Circumference is: " + circumCal + "<br>");

// var areaCal = 3.142 * radius * radius;
// document.write("The Area is: " + areaCal); 

//? Question 13
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// var snackName = prompt("Enter your Favourite Snack name.");
// document.write(" Favourite Snack: " + snackName + "<br>");

// var currentAge = parseInt(prompt("Enter your current age."));
// document.write("Current Age: " + currentAge + "<br>");

// var estimatedAge = parseInt(prompt("Enter your estimated maximum age."));
// document.write("Estimated Maximum Age: " + estimatedAge + "<br>");

// var amountOfSnack = parseInt(prompt("Enter your amount of Snack per day."));
// document.write("Amount of Snack per day: " + amountOfSnack + "<br>");

// var need = (estimatedAge - currentAge) * amountOfSnack;
// document.write("You will need " + need + " " + snackName + " to last you until the rape old age of " + estimatedAge);
