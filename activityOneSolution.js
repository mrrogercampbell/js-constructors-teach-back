// Part 1: Create a Constructor Function
// We create a constructor function which replaces the two objects we created in the last solution
// This allows us to dynamically create object just by calling this function and passing it the required arguments
function Animal(isRaining, noise) {
    this.raining = isRaining
    this.noise = noise

    this.makeNoise = () => {
        if (this.raining === true) {
            console.log(this.noise)
        }
    }
}

// Part 2: Create Two Objects with the Constructor Function
// We are able to create new object instances by invoking the Animal constructor functions with the "new" keyword
const dogs = new Animal(true, "Woof!")
const cats = new Animal(false, "Meow!")

// Part 3: Invoke Methods within each Objectives
// As you can see we are still able to invoke each objects method in the same way we did previously
dogs.makeNoise()
cats.makeNoise()

// We can also update properties within the objects
cats.raining = true
cats.makeNoise()

// Part 4: Optimize the massHysteria Function
function massHysteria(dogObj, catObj) {
    if (dogObj.raining === true && catObj.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
}

// Part 5: Invoke the massHysteria Function
massHysteria(dogs, cats)