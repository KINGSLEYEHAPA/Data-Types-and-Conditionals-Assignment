
// 1. Celsius to Fahrenheit Converter.

/*
 * Programming Quiz: Converting Temperatures
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `celsius`
 * 2. You code should have a variable `fahrenheit`
 * 3. Your variable `celsius` should equal `12`
 * 4. Your variable `fahrenheit` should produce the output equal `53.6`
 * 5. Your variable `fahrenheit` declaration should use the `celsius` variable
 * 6. Your variable `fahrenheit` should have the correct formula
 * 7. Your code should log the `fahrenheit` variable
 * 8. Your code should not be empty
 */
 
 
let celsius = 12;
let fahrenheit = celsius * 1.8 + 32;
 
console.log(fahrenheit);
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);



//2. Favourite Food.

/*
 * Programming Quiz: Favorite Food
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should print a string with your favorite food
 * 2. Your code should have the first character capitalized
 * 3. Your code must have a `console.log()` function
 * 4. Your code should not be empty
 */

let favouriteFood = 'Beans';
 
console.log(favouriteFood);

// 3. String Equality



// Directions:
// Fix the right side expression so it evaluates to true.
"ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
/*
 * Programming Quiz: String Equality for All
 *
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `answer`
 * 2. Your code should have "ALL Strings are CrEaTeD equal" on the left side
 * 3. Your code should use `==` comparison operator
 * 4. The comparison should evaluate to true
 * 5. The right side of your expression should match the left side
 */
 
// fix the right side of the expression
const answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);

// 4. All tied up
// Directions:
// Build a single string that resembles the following joke.
// Why couldn't the shoes go out and play?
// They were all "tied" up!
 
// Your joke should take the format of a question and answer. The first line should be a question and the second line should be an answer.
// Hint: You will need to use special characters to produce the following output.
/*
 * Programming Quiz: All Tied Up
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/
var joke = " Why couldn't the shoes go out and play? \n They were all \"tied\" up!";
console.log(joke);


// 5. Yosa Bosun
// Directions:
// Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
// Blowing from the west
// Fallen leaves gather
// In the east.
 
// Each string should be printed on its own line.
// Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.
// /*
 /* Programming Quiz: Yosa Buson
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `haiku`
 * 2. Your code should use string concatenation
 * 3. Your poem should match the famous haiku poem
 */
 
let haiku = "\tBlowing from the west\n \tFallen Leaves gather\n \tIn the east."
console.log(haiku);


// 6. What’s my name?
// Directions:
// Create a variable called fullName and assign it your full name as a string.
/*
 * Programming Quiz: What's my Name?
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `fullName`
 * 2. Your variable `fullName` should be declared using the `var` keyword
 * 3. Your variable `fullName` should be a non-empty string
 */
 
// your code goes here

var fullName = "Kingsley Omozogie Ehapa";
console.log(fullName);


// 7. Out to Dinner
// Directions:
// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
// Print the total to the JavaScript console.
// Hint: 15% in decimal form is written as 0.15_._
// TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
/*
 * Programming Quiz: Out to Dinner
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */
 
// your code goes here
let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.15;
let total= bill + tip;
total= total.toFixed(2);
console.log(`Total cost of Dinner is \$${total}.`);


 
// 8. Mad Libs
// Directions:
// Mad Libs is a word game where players have fun substituting words for blanks in a story. For this exercise, use the adjective variables below to fill in the blanks and complete the following message.
// "The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"
 
// let adjective1 = "amazing";
// let adjective2 = "fun";
// let adjective3 = "entertaining";
 
// Assign the resulting string to a variable called madLib.
/*
 * Programming Quiz: MadLibs
 * 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */
 
 // your code goes here
 let adjective1 = "amazing";
 let adjective2 = "fun";
let adjective3 = "entertaining";
let madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`
console.log(madLib);

// 9. One Awesome message
// Directions:
// Here are two awesome messages:
// Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
// Hi, my name is James. I love baseball. In my spare time, I like to read.
 
// Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
// Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
/*
 * Programming Quiz: One Awesome Message (2-12)
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */
 
 
// Add your code here
 
let firstName = "Kingsley";
let interest = "Technology";
let hobby = "play football";

let awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}. `;
console.log(awesomeMessage);






