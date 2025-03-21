// Recursion -> A function that calls itself.

// let i = 0

// const counter = () => {
//     if (i == 5) {
//         return;
//     }
//     console.log(i);
//     i++
//     counter()
// }

// counter()

const sum = (n) => {
    if (n == 0) {
        return 0
    }
    return n + sum(n - 1) 
}

// console.log(sum(10));

// sum(4) => 10
// sum(3) => 6
// sum(2) => 3
// sum(1) => 1
// sum(0) => 0

class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get(key) {
        const res = this[key]
        if (res == undefined) {
            return console.log("Invalid key");
        }
        return res
    }
}

class Child extends Person{ // extends Person -> inheritance

}

const person = new Child("John", 23)

console.log(person.get("name"));

// encapsulation -> binding properties and methods together
// abstraction -> hiding the implementation details
// polymorphism -> same method name can have different implementations

class Vehicle{
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    display() {
        return this.make + " " + this.model + " " + this.year
    }
}

class Toyota extends Vehicle{
    display() {
        return "Toyota"
    }

    parentDisplay() {
        return super.display()
    }
}

const veh = new Toyota("Toyota", "Camry", 2022)

console.log(veh.parentDisplay());