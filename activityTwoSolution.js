// Creating a variable called dogs
// dogs value is an object that has 3 key/value pairs
// "raining" and "noise" are properties
// "makeNoise" is a method
let dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        // the "this" keyword refers to the object in which it is called within
        // In this case "this" would reference "dogs"
        if (this.raining === true) {
            console.log(this.noise)
        }
    },
    // Great example to show what I mean
    // By console logging this from within the object it will print the object to the console
    consoleThis: function () {
        console.log(this)
    }
}

let cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise)
        }
    }
}

// dogs.consoleThis();
dogs.makeNoise();
cats.raining = true;
cats.makeNoise();


function massHysteria(dogObj, catObj) {
    if (dogObj.raining === true && catObj.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
};

massHysteria(dogs, cats)