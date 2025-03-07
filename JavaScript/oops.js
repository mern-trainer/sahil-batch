// Javascript -> JavaScript is used to create interactive and dynamic web pages.
// variable -> Container for storing values
// Keyword -> Reserved words
// Identifier -> User defined word -> variable, funcition, class
// string -> Collection chars.
// Array -> Collection of elements
// DOM -> Programming interface for web documents.

// oops -> Object Oriented Programming system

// class -> Template for creating objects.
// Object -> Instance of a class.

// Identifier -> User defined word ->class, class name
// constructor -> Special method that is called when an object is created.
// property -> Attributes of an object.
// Methods -> Function that is associated with an object.

// this -> Keyword that refers to the current object.

// camel case -> firstName, sumOfTwoNumbers
// pascal case -> FirstName, SumOfTwoNumbers
// snake case -> first_name, sum_of_two_numbers


class Person{

    // private property

    #name;

    constructor(name) {
        this.#name = name
    }
    display(a, b) {
        console.log(this.#sum(a,b));
        return "Name = " + this.#name
    }
    #sum(a, b) {
        return a + b
    }
}

const person = new Person("John")


// console.log(person.sum(94,50,"+"));

person.name = "Jane"

console.log(person.name);

const res = person.display(11,11)

console.log(res);

// 4 pillers of oops

// 1 Inheritance -> Child class can access the properties and methods of the parent class. -> extends
// 2 Polymorphism -> Same method name can have different implementations.
// a. overloading -> Same method name can have different parameters.
// b. overriding -> Same method name can have different implementations.
// 3 Abstraction -> Hiding the implementation details.
// 4 Encapsulation -> Binding properties and methods together.