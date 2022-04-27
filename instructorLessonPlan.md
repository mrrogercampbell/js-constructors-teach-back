# 11.1 JS Constructors (Instructor Lesson Plan)
- [11.1 JS Constructors (Instructor Lesson Plan)](#111-js-constructors-instructor-lesson-plan)
  - [Step 1: Intro yourself](#step-1-intro-yourself)
  - [Step 2: Agenda](#step-2-agenda)
    - [Step 3: Check-In With Students](#step-3-check-in-with-students)
  - [Step 4: Learning Objectives](#step-4-learning-objectives)
  - [Step 5: Lesson Topic Overview](#step-5-lesson-topic-overview)
  - [Step 6: Concept Review: JS Objects](#step-6-concept-review-js-objects)
  - [Step 7: Activities Overview](#step-7-activities-overview)
    - [Activity 1: rainingCatsAndDogs (Everyone Do)](#activity-1-rainingcatsanddogs-everyone-do)
    - [Activity 2: rainingCatsAndDogs (Instructor Do)](#activity-2-rainingcatsanddogs-instructor-do)
  - [Step 8: Activity 1 Execution](#step-8-activity-1-execution)
    - [Code Requirements](#code-requirements)
    - [Review The Solution](#review-the-solution)
  - [Step 9: Activity 2 Execution](#step-9-activity-2-execution)
    - [How to Lead This Activity](#how-to-lead-this-activity)
    - [Things to Cover](#things-to-cover)
  - [Step 10: Key Takeaways](#step-10-key-takeaways)
  - [Step 11: If You Get To Prototypes](#step-11-if-you-get-to-prototypes)
## Step 1: Intro yourself
Use your famous lines:
* "You'll never know more than you do not know."
    * Explain to students how important it is to ask question and understand that they should never expect themselves to know everything or understand everything we learn in the moment
* "Ducklings!!"
  * Explain the quick concept of who my ducklings are and that they are now a part of that family

## Step 2: Agenda
Talk through what we will be doing today:
* Start with what we are learning and why
* Explain the two activities we have planned
    1. rainingCatsAndDogs (Everyone Do)- The class will assist me in creating two objects and a function.
    2. rainingCatsAndDogs (Instructor Do) - Review the optimized code with the class and talk about how creating an Animal class that takes in all the values that the Cats and Dogs objects had is more precise and D.R.Y.

### Step 3: Check-In With Students
* Ask if any students have questions
* Be sure to ask probing question about what we just did to check that the concepts really sunk in.

## Step 4: Learning Objectives
This lesson is intended to assist you as Engineers in:
  * Mastering the basics of JavaScript objects.
  * Understanding how to create basic JavaScript constructors for usage in Node applications.
  * Be able to create a simple Node application which uses methods contained within a constructed
object.

## Step 5: Lesson Topic Overview
At a high-level just let students know learning how to work with Constructor Functions will increase their productivity by enabling them to write D.R.Y., dynamic, and clean code.

## Step 6: Concept Review: JS Objects
* What is a JS object?
  * Objects are a JS data structure that stores Key/Value pairs.
* What syntax denotes a JS object?
  * `{}`
* What is a key?
  * Is a reference name for a value stored with in an object
* What is a method?
  * A function that is stored within an object.
* How do you access a key and or a method within an object?
  * Dot notation
* What is the `this` keyword do?
  * It references the object that it is called within.

## Step 7: Activities Overview
Explain at a high-level what we will be doing for each activity.
### Activity 1: rainingCatsAndDogs (Everyone Do)
The class will assist me in creating two objects and a function.

How to Lead This Activity
* Call on a students to get things started
  * They should be providing the answers
  * You are able to assist by nudging them in the right direction
  * Be sure to ask them probing questions as they are providing you a solution.
 * Be sure to check in with your TA on timing/pace

### Activity 2: rainingCatsAndDogs (Instructor Do)
* Optimize the code from the previous activity by creating an Animal class that can take in all the values the Cats and Dogs objects had.

## Step 8: Activity 1 Execution
### Code Requirements
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

### Review The Solution
1. Make certain to point out how we created keys and methods within the dogs and cats objects.
   * Ask students:
      * What is a key?
      * What is a method?
2. Also make certain to point out how we were able to call the values/methods of our cats and dogs objects later on in the code.
3. Ask the class if they see anything in this code which seems redundant upon further examination.

## Step 9: Activity 2 Execution
### How to Lead This Activity
* Open the solution code and review it with the students.
* Ask them to point out any differences they see between the two solutions
### Things to Cover
* This code uses what's known as a constructor function and it is essentially a function which can be called upon to create an object with a particular layout.
* Be sure to point out how the first letter of the constructor is capitalized.
  * This syntax is to make it easier for coders to distinguish constructors from their other functions.
* The new keyword along with the constructor name is utilized to create a new object

## Step 10: Key Takeaways
1. This code uses what's known as a constructor function and it is essentially a function which can be called upon to create an object with a particular layout.
2. The first letter of the constructor should always be capitalized.
  * This syntax makes it easier for other Engineers to distinguish constructors from their other functions.
3. The new keyword along with the constructor name is utilized to create a new object.

## Step 11: If You Get To Prototypes
In a nutshell a prototype is an object instance not types.

Here is a great code walkthrough of Prototypes:
```js
let parent = { lastName: 'Campbell' }
let child = { }
Object.setPrototypeOf(child, parent)

console.log(child.lastName) // 'Campbell'

child.lastName = 'Vargas'

console.log(child.lastName) // 'Vargas'

console.log(parent.lastName) // 'Campbell'

delete child.lastName

console.log(child.lastName) // 'Campbell'

parent.lastName = 'Wofford'

console.log(child.lastName) // 'Wofford'
```

I reworked this example from one found in [As a JS Developer, This Is What Keeps Me Up at Night](https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up#:~:text=Functions%20are%20first%2Dclass%20in,function%20that%20returns%20an%20object.)