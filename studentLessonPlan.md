# 11.1 JS Constructors
## Table of Contents
- [11.1 JS Constructors](#111-js-constructors)
  - [Table of Contents](#table-of-contents)
  - [Who Am I](#who-am-i)
  - [Agenda](#agenda)
  - [Learning Objectives](#learning-objectives)
  - [Lesson Topic Overview](#lesson-topic-overview)
  - [Concept Review: JS Objects](#concept-review-js-objects)
  - [Activities Overview](#activities-overview)
    - [Activity 1: rainingCatsAndDogs (Everyone Do)](#activity-1-rainingcatsanddogs-everyone-do)
    - [Activity 2: rainingCatsAndDogs (Instructor Do)](#activity-2-rainingcatsanddogs-instructor-do)
  - [Activity Code Requirements](#activity-code-requirements)
    - [Activity 1](#activity-1)
    - [Activity 2](#activity-2)
    - [Key Takeaways](#key-takeaways)
  - [Further Reading](#further-reading)

## Who Am I
Before we dive into the lesson, I would like to quickly introduce myself:

Roger Campbell II is a Software Engineer. He has trained over 1,000 students in the latest software technologies such as JavaScript, React, Python, Django, C#, Blockchain technologies, and much more. With a background of 10+ years in Information Technology, Roger has worked in multiple fields as a technologist. From venture capital funding, commercial real estate funding, health care data management, retail, and even continuing education, Roger’s main takeaway from his time in tech is that “you will never know more than you do not” and with that in mind he founded GemStack.

[Roger@gemstack.io](mailto:roger@gemstack.io)
[LinkedIn Profile](https://www.linkedin.com/in/mrrogercampbell/)

## Agenda
To facilitate the achievement of our learning objectives today's lesson will be presented in the following order.
Your instructor will:
1. Introduce themselves.
2. Give an overview of what topics will be covered and why.
3. Talk through and review basic JavaScript object syntax
4. Review at a high level the two activities you will be completing.
5. Guide the class through each activity

## Learning Objectives
This lesson is intended to assist you as Engineers in:
  * Mastering the basics of JavaScript objects.
  * Understanding how to create basic JavaScript constructors for usage in Node applications.
  * Be able to create a simple Node application which uses methods contained within a constructed
object.

## Lesson Topic Overview
In this class we will be introducing you as Engineers to the usage of JavaScript constructors and how they
can be used to dynamically create objects with similar schemas. This is a very important concept for your to understand because it will empower you to write D.R.Y., dynamic, and reusable code. The utilization of constructors will help you design code that is easier to read and helpful for others to utilize.

One of the most important things for you on the job as an Engineer is to develop systems that others are able to build on top of. In other words your peers should be able take the code you write and add on to it to develop working solutions. By understanding how to implement JavaScript constructors you will be enabled to perform on the job by bringing a added value to your development toolkit.

## Concept Review: JS Objects
* What is a JS object?
* What syntax denotes a JS object?
* What is a key?
* What is a method?
* How do you access a key and or a method within an object?
* What is the `this` keyword do?
## Activities Overview
### Activity 1: rainingCatsAndDogs (Everyone Do)
You and your fellow cohort-mates will assist your instructor in creating a node program that outputs the following:

```sh
Woof!
Meow!
DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!
```

### Activity 2: rainingCatsAndDogs (Instructor Do)
Your Instructor will demo to the cohort how to optimized the code that was developed in `Activity 1` to utilize a `Constructor Function`.

## Activity Code Requirements
### Activity 1
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

### Activity 2
Part 1: Create a Constructor Function
* Optimize the `dogs` and `cats` objects by creating a Constructor Function called `Animal` that:
  * Accepts two arguments for the redundant data that each store.
  * Has a `makeNoise` method

Part 2: Create Two Objects with the Constructor Function
* Utilize the `Animal` Constructor Function to instantiate two objects:
  1. dogs
  2. cats
* At instantiation pass in the required arguments to set the initial value for the two properties.

Part 3: Invoke Methods within each Objectives
* Invoke the `makeNoise` method within the `dogs` and `cats` objects

Part 4: Optimize the massHysteria Function
* Rework the `massHysteria` function so that it:
  1. Accepts two objects as arguments
  2. Checks each to see if the `.raining` property of each object is true
     1. If true print to the console `DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!`
     2. Else do nothing

Part 5: Invoke the massHysteria Function
* Invoke the function and pass `dogs` and `cats` as arguments.

### Key Takeaways
1. This code uses what's known as a constructor function and it is essentially a function which can be called upon to create an object with a particular layout.
2. The first letter of the constructor should always be capitalized.
  * This syntax makes it easier for other Engineers to distinguish constructors from their other functions.
3. The new keyword along with the constructor name is utilized to create a new object.


## Further Reading
[As a JS Developer, This Is What Keeps Me Up at Night](https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up#:~:text=Functions%20are%20first%2Dclass%20in,function%20that%20returns%20an%20object.)- great article on JS Prototypes