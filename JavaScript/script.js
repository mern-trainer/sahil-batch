// // variables
// // var, let, const
// // camel Case -> firstName, sumOfTwoNumbers,
// // pascal, snake case -> FirstName, sum_of_two_numbers
// // var age = 23;
// // var username = "John";
// // console.log(age)

// var a = 10;
// console.log(a);
// var n;

// var a = "Hey"
// console.log(a);

// // var -> Re-declaration is allowed, Re-assignment is allowed

// let b = 20;
// console.log(b);
// let m;

// b = "Hello"
// console.log(b);

// // let -> Re-declaration is not allowed, Re-assignment is allowed

// const c = 30;
// const y = 40;
// console.log(c);

// // const -> Re-declaration is not allowed, Re-assignment is not allowed

// // functions

// // set of instructions to perform a task

// // function declaration

// function display(number){ // parameters - [number is a parameter]
//     console.log(number);
// }

// display(10); // arguments - [10 is an argument]

// function sumOfTwoNumbers(num1, num2){ // parameters - [num1, num2 are parameters]
//     const result = num1 + num2; // local variable
//     console.log(result);
// }

// sumOfTwoNumbers(20, 40); // arguments - [20, 40 are arguments]
// sumOfTwoNumbers(50, 90); // arguments - [50, 90 are arguments]
// sumOfTwoNumbers(1, 2); // arguments - [1, 2 are arguments]

// // conditional statements => if else
// // arithmetic operators => +, -, *, /, %, ++, --

// // 3 = 3 + 1
// // a += 1 // a = a + k
// function calc(a, op, b){
//     let result;
//     if(op == "+"){
//         result = a + b;
//     } else if(op == "-") {
//         result = a - b
//     }else if(op == "*"){
//         result = a * b
//     }else if(op == "/"){
//         result = a / b
//     }else{
//         console.log("Invalid");
//     }
//     return result
// }

// const res = calc(30, "/", 60);

// console.log(res + "result");

// const nm = 0

// switch(nm){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }

// // Loop -> a statement that allows us to execute a set of statements multiple times

// // for -> used to iterate over a block of code a fixed number of times

// let sum = 0
// for(let idx=1; idx<=10; idx++){
//     if(idx % 2 == 0){
//         break;
//     }
//     console.log(idx);
// }

// console.log(sum);
// // while -> used to iterate over a block of code as long as a condition is true

// let i = 0

// while(i < 10){
//     console.log("Hello");
//     i++
// } // entry controlled loop

// // do while -> used to iterate over a block of code at least once, and continue to iterate as long as a condition is true

// do{
//     console.log("Hello");
//     i++
// }while(i < 10) // exit controlled loop

// DOM -> Document Object Model

// string, array

// String => collection of characters

const text = "Hello World";

console.log(text[0])
console.log(text.charAt(4));
console.log(text.indexOf("Hello"));
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.replace("l", "5"));
console.log(text.replaceAll("l", "5"));
console.log(text.includes("Hello"));
console.log(text.slice(-2));

// Array => collection of elements

const numbers = [10, 20, 30, 40, 50];

numbers[0] = 0

console.log(numbers[1]);
console.log(numbers.indexOf(200));
console.log(numbers.length);
console.log(numbers.includes(30));

numbers.push(60)
numbers.pop()
numbers.unshift(-10)
numbers.shift()
numbers.splice(2, 0, 100)
console.log(numbers.join(" "));
console.log(numbers.toString());
console.log(numbers);

// object -> collection of keys and values

const obj = {
    age: 20,
    name: "John",
    address: "New York"
}
obj.address = "change"
console.log(obj.address);

// DOM -> Document Object Model -> Programming interface to access and manipulate the content, structure, style and manage events of documents.

// getElementById("<id>"), getElementByClassName("<class>"), getElementsByTagName("<tag>")

