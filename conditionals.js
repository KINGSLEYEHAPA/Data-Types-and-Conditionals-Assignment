// 1. Write an if...else statement that:
// prints "even" if the number is an even number
// prints "odd" if the number is an odd number
// Hint: Use the % (modulo) operator to determine if a number is even or odd. The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one: 
// console.log(12 % 3);
// console.log(10 % 4);
// Result:
// 0
// 2
// The answer for 12 % 3 is 0 because twelve divided by three has no remainder. 10 % 4 is 2 because ten divided by 4 has a remainder of two.
// Make sure to test your code with different values. For example:
// If number equals 1, then odd should be printed to the console.
// If number equals 12, then even should be printed to the console.
/*
 * Programming Quiz: Even or Odd 
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
// change the value of `number` to test your if...else statement
let number =2;
if (number%2===0) {
  console.log("even");
} else {
  console.log("odd");
}

// 2. Musical groups have special names based on the number of people in the group. For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.
// Directions:
// Write a series of conditional statements that:
// Prints "not a group" if musicians is less than or equal to 0
// Prints "solo" if musicians is equal to 1
// Prints "duet" if musicians is equal to 2
// Prints "trio" if musicians is equal to 3
// Prints "quartet" if musicians is equal to 4
// Prints "this is a large group" if musicians is greater than 4
// TIP: Test your code with different values. For example,
// If musicians equals 3, then "trio" should be printed to the console.
// If musicians equals 20, then "this is a large group" should be printed to the console.
// If musicians equals -1, then "not a group" should be printed to the console.
// Be sure to watch out for any extra or missing characters (including spaces or punctuation marks) in your output string as well!
/*
 * Programming Quiz: Musical Groups
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */
 
// change the value of `musicians` to test your conditional statements
let musicians = 100;
// your code goes here
 
 if (musicians <= 0){
   console.log("not a group");
 }
 else if (musicians==1 ){
    console.log("solo");

 }
  else if (musicians==2 ){
    console.log("duet");

 }
  else if (musicians==3 ){
    console.log("trio");

 }
 else if (musicians==4 ){
    console.log("quartet");

 }
 else if (musicians>4 ){
    console.log("This is a large group");

 }



 

 

 
 
 


