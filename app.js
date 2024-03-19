//Chapter No: 21-25

//Q1
// var firstName = prompt("Enter Your First Name:");
// var lastName = prompt("Enter Your Last Name:");
// var fullName = firstName + lastName;
// alert(`Hello World! Sir ${fullName}`);

//Q2
// var favMob = prompt("Enter Your Favorite Phone:");
// document.write(`My favorite phone is: ${favMob} </br> Length of string: ${favMob.length}`);

//Q3
// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write(`String: ${word} </br> Index of '${word[7]}': ${index}`);

//Q4
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write(`String: ${word} </br> Index of '${word[9]}': ${lastIndex}`);

//Q5
// var word = "Pakistani";
// var index = word.charAt(3);
// document.write(`String: ${word} </br> Character at index 3: ${index}`);

//Q6
// var firstName = prompt("Enter Your First Name:");
// var lastName = prompt("Enter Your Last Name:");
// var fullName = firstName.concat(lastName);
// alert(`Hello World! Sir ${fullName}`);

//Q7
// Define the word
// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder", "Islam");
// document.write(`City: ${word} </br> After replacement: ${replacedWord}`);

//Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedWord = message.replace("and", "&");
// document.write(replacedWord);

//Q9
// var str = "472";
// var caseChange = Number(str);
// console.log(caseChange);
// document.write(`Value: ${str} </br> Type: ${typeof(str)} </br> Value: ${caseChange} </br> Type: ${typeof(caseChange)}`);

//Q10
// var userInput = prompt("Enter Your Value");
// var caseChange = userInput.toUpperCase();
// document.write(`User input: ${userInput} </br> Upper case: ${caseChange}`);

//Q11
// var userInput = "javascript";
// var caseChange = userInput.slice(0,1).toUpperCase();
// var titleCase = caseChange + userInput.slice(1);
// document.write(`User input: ${userInput} </br> Title case: ${titleCase}`);

//Q12
// var num = 35.36;
// var str = num.toString();
// var numWithoutDot = str.replace(".", "");
// document.write(`Number: ${num} </br> Result: ${numWithoutDot}`);

//Q13
// var userInput = prompt("Enter Your UserName");
// for (var i = 0; i <= userInput.length; i++) {
//     if (userInput[i] == "@" || userInput[i] == "!") {
//         alert("Please enter a valid username");
//         break;
//     } else {
//         alert(`Welcome ${userInput}`);
//         break;
//     }
// }

//Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var toLowerInput = userInput.toLowerCase();
// for (var i = 0; i <= A.length; i++) {
//     if (toLowerInput == A[i]) {
//         document.write(`${toLowerInput} is <b>available</b> at index ${i} in our bakery`);
//         break;
//     } else {
//         document.write(`We are sorry. ${toLowerInput} is <b>not available</b>`);
//     }
// }

//Q15
// function validatePassword(password) {
//     // Check if password length is at least 6 characters
//     if (password.length < 6) {
//         return false;
//     }

//     // Check if password starts with a number
//     if (/^\d/.test(password)) {
//         return false;
//     }

//     // Check if password contains alphabets and numbers
//     var containsAlphabets = /[a-zA-Z]/.test(password);
//     var containsNumbers = /\d/.test(password);

//     return containsAlphabets && containsNumbers;
// }

// function getPassword() {
//     var password = prompt("Enter your password:");
//     return password;
// }

// function validateAndPromptPassword() {
//     var password = getPassword();

//     // Validate the password
//     while (!validatePassword(password)) {
//         alert("Password must contain at least 6 characters, start with a letter, and contain both letters and numbers.");
//         password = getPassword();
//     }

//     alert("Password is valid!");
// }

// // Call the function to validate and prompt the user for a password
// validateAndPromptPassword();

//Q16
// Define the string
// var university = "University of Karachi";

// for (var i = 0; i < university.length; i++) {
//     document.write(`${university[i]} </br>`);
// }

//Q17
// var userInput = "Pakistan";
// var lastChar = userInput.charAt(7);
// document.write(`User input: ${userInput} </br> Last character of input: ${lastChar}`);

//Q18
// var sentence = "The quick brown fox jumps over the lazy dog";
// var lowercaseSentence = sentence.toLowerCase();
// var wordToFind = "the";
// var wordsArray = lowercaseSentence.split(" ");
// var count = 0;
// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === wordToFind) {
//         count++;
//     }
// }

// document.write(`Text: ${sentence} </br> There are ${count} occurrence(s) of word '${wordToFind}'`);
