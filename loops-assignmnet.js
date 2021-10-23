// Loops Exercises

// 1. "Fizzbuzz" is a famous interview question used in programming interviews. It goes something like this:
// Loop through the numbers 1 to 100
// If the number is divisible by 3, print "Fizz"
// If the number is divisible by 5, print "Buzz"
// If the number is divisible by both 3 and 5, print "FizzBuzz"
// If the number is not divisible by 3 or 5, print the number
// TIP: A number x is divisible by a number y if the answer to x / y has a remainder of 0. For example, 10 is divisible by 2 because 10 / 2 = 5 with no remainder. You can check if a number is divisible by another number by checking if x % y === 0.
// Keep in mind that in an interview, you would want to write efficient code with very little duplication. We don't want you to worry about that for this question. Just focus on practicing using loops.
// Directions:
// Write a while loop that:
// Loop through the numbers 1 to 20
// If the number is divisible by 3, print "Fizz"
// If the number is divisible by 5, print "Buzz"
// If the number is divisible by 3 and 5, print "FizzBuzz"
// If the number is not divisible by 3 or 5, print the number
 
 
/*
 * Programming Quiz
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
var x = 1;

while (x <= 100) {

    if(x%3===0&&x%5!==0){
        console.log("Fizz");
        x++;


    }
    else if (x%5===0&&x%3!==0){
           console.log("Buzz");
        x++;

    }
    else if (x%3===0&&x%5===0){
           console.log("Fizzbuzz");
        x++;
    }
    else if(!(x%3===0||x%5===0)){
         console.log(x);
         x++;


    }

}



// 2. Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.
// 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
// 98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
// ...
// 2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
// 1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!

// Some Notes:
// Note the pluralization of the word "bottle" when you go from 2 bottles to 1 bottle.
// Your text editor may try to autocorrect your ellipses (...) to the ellipses character (…). Do not use the ellipses character for this quiz; use three consecutive periods instead.
/*
 * Programming Quiz
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while ( num>=1&&num<=99) {

    if (num>1){

        console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around...${num-1} bottles of juice on the wall!`);
        num--;

        }
    else if(num===1){

       console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around...${num-1} bottles of juice on the wall!`);
        num--;




}

}



// 3. NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:
// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// NOTE: "T-50 seconds" read as "T-minus 50 seconds".
// Directions:
// Write a while loop that counts down from 60 seconds and:
// If there's a task being completed, it prints out the task
// If there is no task being completed, it prints out the time as T-x seconds
// Use the task and time descriptions described above.
// Your Code:
// Your output should look like the following:
// T-60 seconds
// T-59 seconds
// T-58 seconds
// ...
// T-51 seconds
// Orbiter transfers from ground to internal power
// T-49 seconds
// ...
// T-3 seconds
// T-2 seconds
// T-1 seconds
// Solid rocket booster ignition and liftoff!
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// your code goes here

let time = 60;

while(time>=0){
    if(time===50){

        console.log("Orbiter transfers from ground to internal power");
        time--;


    }

    else if(time===31){

        console.log("Ground launch sequencer is go for auto sequence start");
        time--;


    }

    else    if(time===16){

        console.log("Activate launch pad sound suppression system");
        time--;


    }

    else if(time===10){

        console.log("Activate main engine hydrogen burnoff system");
        time--;


    }
      else if(time===6){

        console.log("Main engine start");
        time--;


    }
    else if(time===0){

        console.log("Solid rocket booster ignition and liftoff! ");
        time--;


    }

    else {

         console.log( `T-${time} seconds`)
         time--;
    }

}




