## Intro yourself
Use your famous lines:
* "You'll never know more than you do not know."
    * Explain to students how important it is to ask question and understand that they should never expect themselves to know everything or understand everything we learn in the moment
* "Ducklings!!"
  * Explain the quick concept of who my ducklings are and that they are now a part of that family


## Agenda
Talk through what we will be doing today:
* Start with what we are learning and why
* Explain the two activities we have planned
    1. rainingCatsAndDogs (Everyone Do)- The class will assist me in creating two objects and a function.
    2. rainingCatsAndDogs (Instructor Do) - Review the optimized code with the class and talk about how creating an Animal class that takes in all the values that the Cats and Dogs objects had is more precise and D.R.Y.

### Check-In With Students
* Ask if any students have questions
* Be sure to ask probing question about what we just did to check that the concepts really sunk in.

## rainingCatsAndDogs (Everyone Do)
The class will assist me in creating two objects and a function.

### How to Lead This Activity
* Call on a students to get things started
  * They should be providing the answers
  * You are able to assist by nudging them in the right direction
  * Be sure to ask them probing questions as they are providing you a solution.
 * Be sure to check in with your TA on timing/pace

### Activity Code Requirements
Part 1:
* Create 2 objects
  1. dogs
  2. cats
* Each object should have the following properties and method:
  * raining (bool)
  * noise (string)
  * makeNoise (ƒ) -> if raining !false => console.log(noise)

Part 2:
* Call the makeNoise method of each object which should print something to the console.

Part 3:
* Create a function called massHysteria
* It should accept two objects as arguments
* If each objects .raining property is set to true
  * Print to the console "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!"
* Else do nothing

#### Review The Solution
1. Make certain to point out how we created keys and methods within the dogs and cats objects.
   * Ask students:
      * What is a key?
      * What is a method?
2. Also make certain to point out how we were able to call the values/methods of our cats and dogs objects later on in the code.
3. Ask the class if they see anything in this code which seems redundant upon further examination.

## rainingCatsAndDogs (Instructor Do)
* Optimize the code from the previous activity by creating an Animal class that can take in all the values the Cats and Dogs objects had.

### How to Lead This Activity
* Open the solution code and review it with the students.
* Ask them to point out any differences they see between the two solutions

### Things to Cover
* This code uses what's known as a constructor function and it is essentially a function which can be called upon to create an object with a particular layout.
* Be sure to point out how the first letter of the constructor is capitalized.
  * This syntax is to make it easier for coders to distinguish constructors from their other functions.
* The new keyword along with the constructor name is utilized to create a new object