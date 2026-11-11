//////////STRING METHODS//////////

// QUESTION 1//
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + lastName;
// alert("Hello " + firstName + " " + lastName);

// QUESTION 2 //
// var phoneModel = prompt("Enter your favorite mobile phone model");
// document.writeln("My favorite phone is: " + phoneModel + "<br>");
// document.writeln("Length of string: " + phoneModel.length);

// QUESTION 3 //
// var index = "Pakistani";
// document.writeln("String: " + index + "<br>" + "Index of 'n': " + index.indexOf("n"));

// QUESTION 4 //
// var index = "Hello World";
// document.writeln("String: " + index + "<br>" + "Last index of 'l': " + index.lastIndexOf("l"));

// QUESTION 5 //
// var index = "Pakistani";
// document.writeln("String: " + index + "<br>" + "Character at index 3: " + index.charAt(3));

// QUESTION 6 //
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// alert("Hello " + fullName);

// QUESTION 7 //
// var city = "Hyderabad";
// document.writeln("City: " + city + "<br>" + "After replacement: " + city.replace("Hyder","Islam"));

// QUESTION 8 //
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.writeln("Original Message: " + message + "<br>" + "Revised Message: " + message.replace(/and/g,"&"));

// QUESTION 9 //
// var str = "472";
// var num = parseInt(str);
// document.writeln("Value: " + str + "<br>" + "Type: " + typeof str + "<br>" + " Value: " + str + "<br>" + "Type: " + typeof num);

// QUESTION 10 //
// var input = prompt("Enter a word");
// var uppercase = input.toUpperCase();
// document.writeln("User input: " + input + "<br>" + "Uppercase: " + uppercase);

// QUESTION 11 //
// var input = prompt("Enter a word");
// var titleCase = input
//   .toLowerCase()
//   .split(" ")
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");
// document.writeln("User input: " + input + "<br>" + "Title Case: " + titleCase);

// QUESTION 12 //
// var num = 35.36;
// var str = num.toString();
// var result = str.replace(".", "");
// document.writeln("Number: " + num + "<br>" + "Result: " + result);

// QUESTION 13 //
// var input = prompt("Enter your username");
// if(/[@.,!]/.test(input)){
// alert("Please enter a valid username");
// document.writeln("! =", '!'.charCodeAt(0) + "<br>");
// document.writeln(", =", ','.charCodeAt(0) + "<br>");
// document.writeln(". =", '.'.charCodeAt(0) + "<br>");
// document.writeln("@ =", '@'.charCodeAt(0));
// }else{
// alert("Valid username: " + input);
// }

// QUESTION 14 //
// var A = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// var userInput = prompt("Welcome to ABC Bakery!\nWhat would you like to order?");
// var searchItem = userInput.toLowerCase();
// var found = false;
// var index;
// for(var i = 0;i < A.length;i++){
// if(A[i].toLowerCase() === searchItem){
// found = true;
// index = i;
// break;
// }
// }
// if (found) {
// alert(userInput + " is available at index " + index + " in our bakery.");
// } else {
// alert("We are sorry. " + userInput + " is not available in our bakery.");
// }

// QUESTION 15 //
// var password = prompt("Enter your password");
// var hasAlphabet = false;
// var hasNumber = false;
// var charCode = password.charCodeAt(0);
// if(charCode >= 48 && charCode <= 57){
// alert("Password should not start with a number");
// }else if(password.length < 6){
// alert("Password should be atleast 6 characters long");
// }else{
// for(var i = 0; i < password.length; i++){
// var code = password.charCodeAt(i);
// if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
// hasAlphabet = true;
// }else if (code >= 48 && code <= 57){
// hasNumber = true;
// }
// }
// if(hasAlphabet && hasNumber){
// alert("Valid Password!");
// }else{
// alert("Please enter a valid password");
// }
// }

// QUESTION 16 //
// var university = "University Of Karachi";
// var arr = university.split("");
// for(var i = 0; i < arr.length; i++){
// document.writeln(arr[i] + "<br>");
// }

// QUESTION 17 //
// var userInput = prompt("Enter a string");
// if(userInput.length > 0){
// var lastCharacter = userInput[userInput.length - 1];
// document.writeln("User Input: " + userInput + "<br>" + "Last character of input: " + lastCharacter);
// }

// QUESTION 18 //
// var str = "The quick brown fox jumps over the lazy dog";
// var lowerStr = str.toLowerCase();
// var words = lowerStr.split(" ");
// var count = 0;
// for(var i = 0; i < words.length; i++){
// if(words[i] === "the"){
// count++;
// }}
// document.writeln("Text: " + str + "<br>" + "There are "+ count + " occurences of the word 'the'");