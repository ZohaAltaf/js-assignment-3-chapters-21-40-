//////////DATE METHODS//////////

// QUESTION 1 //
// let date = new Date();
// document.writeln(date);

// QUESTION 2 //
// let months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// let currentMonth = new Date().getMonth();
// document.writeln("Current Month: " + months[currentMonth]);

// QUESTION 3 //
// let days = ["Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" , "Sun"];
// let currentDay = new Date().getDay();
// document.writeln("Today is " + days[currentDay]);

// QUESTION 4 //
// let currentDay = new Date().getDay();
// if(currentDay === "0" || currentDay === "6"){
// alert("It's Fun Day");
// };

// QUESTION 5 //
// var date = new Date().getMonth();
// if(date <= 16){
// document.writeln("First fifteen days of the month");
// }else{
// document.writeln("Last fifteen days of the month");
// };

// QUESTION 6 //
// document.writeln("Current Date: " + new Date() + "<br>" + "Elapsed milliseconds since January 1, 1970: " + new Date().getTime() + "<br>" + "Elapsed minutes since January 1, 1970: " + new Date().getTime()/60000);

// QUESTION 7 //
// let time = new Date().getHours();
// if(time < 12){
// alert("It's AM");
// }else{
// alert("It's PM");
// };

// QUESTION 8 //
// let laterDate = new Date(2030, 11, 31);
// document.writeln("Later Date: " + laterDate);

// QUESTION 9 //
// var ramadanStart = new Date("February 18, 2026");
// var today = new Date();
// var daysPassed = Math.floor((today - ramadanStart)/(1000 * 60 * 60 * 24));
// document.writeln(daysPassed + " days have passed since 1st Ramadan");

// QUESTION 10 //
// var referenceDate = new Date();
// var startDate = new Date("January 1, 2026 00:00:00");
// var difference = referenceDate - startDate;
// document.writeln("On reference date " + referenceDate + ",<br>" + Math.floor(difference/1000) + " seconds have passed since beginning of 2026");

// QUESTION 11 //
// var date = new Date();
// var time = date.getHours();
// date.setHours(time - 1);
// document.writeln("Current Date: " + new Date() + "<br>" + "1 hour ago,it was " + date);

// QUESTION 12 //
// var date = new Date();
// var setBackDate = date.getFullYear();
// date.setFullYear(setBackDate - 100);
// document.writeln("Current Date: " + new Date() + "<br>" + "100 years back,it was " + date);

// QUESTION 13 //
// let age = prompt("Enter your age");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.writeln("Your age is " + age + "<br>" + "Your birth year is " + birthYear);

// QUESTION 14 //
// document.writeln("<h1>K-Electric Bill</h1>");
// let userName = "Maheen";
// let month ="March";
// let units = 410;
// let charges = 16;
// let netAmntPayable = units * charges;
// let paySurcharge = 350;
// let grossAmntPayable = netAmntPayable + paySurcharge;
// document.writeln("Customer name: " + userName + "<br>" + "Current month: " + month + "<br>" + "Number of units: " + units + "<br>" + "Charges per unit: " + charges + "<br><br>" + "Net Amount Payable (within Due Date): " + netAmntPayable + "<br>" + "Late payment surcharge: " + paySurcharge + "<br>" + "Gross Amount Payable (after Due Date): " + grossAmntPayable);


//////////FUNCTION//////////

// QUESTION 1 //
// function date (){
// document.writeln(new Date());
// }
// date();

// QUESTION 2 //
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// function fullName (){
    // alert("Hello " + firstName + " " + lastName);
// }
// fullName();

// QUESTION 3 //
// function add (){
    // let num1 = parseFloat(prompt("Enter the first number"));
    // let num2 = parseFloat(prompt("Enter the second number"));
    // let sum = num1 + num2;
    // return sum;
// }
// let result = add();
// alert("The sum is " + result);

// QUESTION 4 //
// function calculate (){
    // let num1 = parseFloat(prompt("Enter first number:"));
    // let num2 = parseFloat(prompt("Enter second number:"));
    // let operator = prompt("Enter operation (+, -, *, /):");
    // let result;
    // if(operator === "+"){
        // result = num1 + num2;
    // }else if(operator === "-"){
        // result = num2 - num1;
    // }else if(operator === "*"){
        // result = num1 * num2;
    // }else if(operator === "/"){
    //   result = num1 / num2;  
    // }else{
        // return "Invalid operation";
    // }
    // return result;
// }
// let answer = calculate();
// alert("Result: " + answer);

// QUESTION 5 //
// function square(num){
    // return num*num;
// }
// let result = square(5);
// alert("Squared value is: " + result);

// QUESTION 6 //
// function factorial (n){
    // if(n < 0){
        // return "Factorial is not defined for negative numbers";
    // }
    // let result = 1;
    // for(let i = 2; i <= n; i++){
        // result *= i;
    // }
    // return result;
// }
// document.writeln(factorial(10));

// QUESTION 7 //
// function counting (){
    // let num1 = Number(prompt("Enter the first number"));
    // let num2 = Number(prompt("Enter the second number"));
// for(let i = num1; i <= num2; i++){
    // document.writeln(i + "<br>");
// }}
// counting();

// QUESTION 8 //
// function calculateHypotenuse (base, perpendicular){
    // function calculateSquare (x){
// return x * x;}
    // let baseSquare = calculateSquare(base);
    // let perpendicularSquare = calculateSquare(perpendicular);
    // let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    // return hypotenuse;}
// let base = parseInt(prompt("Enter the base value:"));
// let perpendicular = parseInt(prompt("Enter the perpendicular value:"));
// let result = calculateHypotenuse(base, perpendicular);
// alert("Hypotenuse = " + result);

// QUESTION 9 //
// function calculateArea (width,height){
    // return width * height;}
// let area1 = calculateArea(5,10);
// document.writeln("Area (arguments as values): " + area1 + "<br>");
// let width = 2;
// let height = 15;
// let area2 = calculateArea(width,height);
// document.writeln("Area (arguments as variables): " + area2);

// QUESTION 10 //
// function isPalindrome(){
    // let input = prompt("Enter a string to check if it is a palindrome");
    // let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // let reversed = cleaned.split("").reverse().join("");
    // if(cleaned === reversed){
        // alert("It is a palidrome!");
    // }else{
        // alert("It is not a palindrome");
    // }}
// isPalindrome();

// QUESTION 11 //
// function capitalize(str){
    // let words = str.split(" ");
    // let result = [];
    // for (let i = 0; i < words.length; i++) {
    // let word = words[i];
    // let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    // result.push(capitalized);}
//   return result.join(" ");}
// let input = prompt("Enter a lowercase string to capitalize it");
// let output = capitalize(input);
// document.writeln(output);

// QUESTION 12 //
// function findLongestWord(str) {
//   let words = str.split(" ");
//   let longest = "";
// for (let i = 0; i < words.length; i++) {
// if (words[i].length > longest.length) {
// longest = words[i];
// }}
// return longest;}
// let input = prompt("Enter a string to find the longest word in it");
// let output = findLongestWord(input);
// document.writeln("The longest word is " + "'" + output +"'");

// QUESTION 13 //
// function countLetter(str, letter) {
//   let count = 0;
// for (let i = 0; i < str.length; i++) {
// if (str[i] === letter) {
// count++;
// }}
//   return count;}
// let result = countLetter("JSResourceS.com", "o");
// alert(result);

// QUESTION 14 //
// function calcCircumference(radius) {
//   let circumference = 2 * Math.PI * radius;
// }
// function calcArea(radius) {
//   let area = Math.PI * radius * radius;
// }
// let input = prompt("Enter the radius of the circle:");

// let radius = parseFloat(input);

// if (isNaN(radius) || radius <= 0) {
//   alert("Please enter a valid positive number for the radius!");
// } else {
//   let circumference = calcCircumference(radius);
//   let area = calcArea(radius);

//   alert("The circumference is " + circumference.toFixed(2));
//   alert("The area is " + area.toFixed(2));}


//////////FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS //////////
//QUESTION 1//
// function power(a,b){
// let result = 1;
// let exponent = b;
// if(b < 0){
// exponent = -b;}
// for(let i = 0; i < exponent; i++){
// result *= a;}
//  if (b < 0) {
// result = 1 / result;}
// return result;
// }
// console.log(power(2, 3));
// console.log(power(5, 0));
// console.log(power(2, -2));

//QUESTION 2//
// function isLeapYear(year){
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
// return true;
// } else {
// return false;
// }}
// let input = prompt("Enter a year:");
// let year = parseInt(input);
// if (isNaN(year) || year <= 0) {
//   alert("Please enter a valid positive year!");
// } else {
//   if (isLeapYear(year)) {
//     alert(year + " is a leap year.");
//   } else {
//     alert(year + " is not a leap year.");
//   }
// }

//QUESTION 3//
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//     let S = calculateSemiPerimeter(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }
// let area = calculateArea(5, 6, 7);
// alert("Area of triangle:" + area);

//QUESTION 4//
// function average(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }
// function percentage(m1, m2, m3) {
//    let totalMarks = 300;
//     let obtainedMarks = m1 + m2 + m3;
//     return (obtainedMarks / totalMarks) * 100;
// }
// function mainFunction() {
//     let avg = average(80, 75, 90);
//     let perc = percentage(80, 75, 90);
//     alert("Average:"+ avg);
//     alert("Percentage:" + perc + "%");
// }
// mainFunction();

//QUESTION 5//
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//         return i;
// }}
//     return -1;
// }
// alert(customIndexOf("hello", "e"));
// alert(customIndexOf("world", "z"));

//QUESTION 6//
// function removeVowels(sentence) {
//     let result = "";
//     for (let i = 0; i < sentence.length; i++) {
//         let ch = sentence[i].toLowerCase();
//         if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
//             result += sentence[i];
// }}
//     return result;
// }
// let sentence = "Hello World";
// let output = removeVowels(sentence);
// alert("Original: "+ sentence);
// alert("Without vowels: "+ output);

//QUESTION 7//
// function countVowelPairs(text) {
//     let count = 0;
//     let vowels = "aeiou";
//     for (let i = 0; i < text.length - 1; i++) {
//         let first = text[i].toLowerCase();
//         let second = text[i + 1].toLowerCase();
//         if (vowels.includes(first) && vowels.includes(second)) {
//             count++;
//             console.log("Found pair:", first + second);
// }}
//     return count;
// }
// let sentence = "Pleases read this application and give me gratuity";

// let result = countVowelPairs(sentence);
// alert("Total consecutive vowel pairs: "+ result);

//QUESTION 8//
// function toMeters(km) {
//     return km * 1000;
// }
// function toFeet(km) {
//     return km * 3280.84;
// }
// function toInches(km) {
//     return km * 39370.1;
// }
// function toCentimeters(km) {
//     return km * 100000;
// }
// function main() {
//     let distanceKm = 5;
//     document.writeln("Centimeters:", toCentimeters(distanceKm) + "<br>");
//     document.writeln("Distance in KM:", distanceKm + "<br>");
//     document.writeln("Meters:", toMeters(distanceKm) + "<br>");
//     document.writeln("Feet:", toFeet(distanceKm) + "<br>");
//     document.writeln("Inches:", toInches(distanceKm));
// }
// main();

//QUESTION 9//
// function calculateOvertime(hoursWorked) {
//     let overtimeRate = 12;
//     if (hoursWorked > 40) {
//         let overtimeHours = hoursWorked - 40;
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
// }}
// function main() {
//     let hours = 50;
//     let overtimePay = calculateOvertime(hours);
//     document.writeln("Hours Worked: "+ hours + "<br>");
//     document.writeln("Overtime Pay: Rs. "+ overtimePay);
// }
// main();

//QUESTION 10//
// function calculateNotes(amount) {
//     let hundreds = 0, fifties = 0, tens = 0;
//     hundreds = Math.floor(amount / 100);
//     amount = amount % 100;
//     fifties = Math.floor(amount / 50);
//     amount = amount % 50;
//     tens = Math.floor(amount / 10);
// document.writeln("100 notes: "+ hundreds +"<br>");
// document.writeln("50 notes: "+ fifties +"<br>");
// document.writeln("10 notes: "+ tens);
// }
// function main() {
//      let input = prompt("Enter the amount to withdraw (multiple of 10):");
//      let amount = parseInt(input);
//      if (isNaN(amount) || amount <= 0 || amount % 10 !== 0) {
//         document.writeln("Invalid input! Enter a positive amount in multiples of 10.");
//         return;
//     }
//     calculateNotes(amount);
// }
// main();