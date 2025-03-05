// // 1. JavaScript -> JavaScript is used to create interactive and dynamic web pages.
// // 2. Variable -> Container to store data values.
// // 3. Identifiers -> Name of the variable, functions, etc.
// // 4. functions -> block of code to perform a task.
// // 5. Data types -> Type of data stored in a variable.
// // 6. String -> Collection of characters.
// // 7. Array -> Collection of elements.
// // 8. keywords -> Reserved words in javaScript.
// // 9. DOM -> Programing interface for web documents to access the HTML elements,
// //           manipulate the HTML elements, change the style of the HTML elements and handle events.
// // 10. DOM Methods -> getElementById(), getElementsByClassName(),
// //                    getElementsByTagName(), querySelector(), querySelectorAll().
// // 11. Event -> Event is an action that occurs on the web page.
// // 12. let -> Re-declaration is not allowed, Re-assignment is allowed.
// // 13. const -> Re-declaration is not allowed, Re-assignment is not allowed.
// // 14. var -> Re-declaration is allowed, Re-assignment is allowed.
// // 15. loop -> A loop is a sequence of instructions that is repeated until a certain
// //             condition is met.
// // 16. switch -> A switch statement is a conditional statement that allows you to
// //               execute different blocks of code based on different conditions.
// // 17. if-else -> An if-else statement is a conditional statement that allows you to
// //                execute different blocks of code based on different conditions.
// // 18. for -> A for loop is a loop that executes a block of code a certain number of times.
// // 19. while -> A while loop is a loop that executes a block of code as long as a certain
// //              condition is true.
// // 20. do-while -> A do-while loop is a loop that executes a block of code once, and then
// //                 repeatedly executes the block of code as long as a certain
// //                 condition is true.

// // 5 times.

// // object, destructure, spread operator, rest operator

// // object -> collection of properties and methods.
// // Collection of keys and values.

// const obj = {
//     name: "John", // string
//     age: 23, // number
//     address: {
//         city: "New York", // string
//         state: "NY" // string
//     }, // object
//     hobbies: ["Reading", "Writing", "Coding"] // array
// }

// obj.sdflsdf = 2309

// // obj.age = 30
// // obj.hobbies.splice(1, 2)

// console.log(obj);

// // const name = obj.name
// // const age = obj.age
// // const address = obj.address
// // const hobbies = obj.hobbies

// // console.log(name, age, address, hobbies);

// // destructure

// const { name, age, address, hobbies } = obj;

// console.log(name, age, address, hobbies);

// const arr = [1, 2, 3, 4]

// // const f = arr[0]
// // const s = arr[1]
// // const t = arr[2]
// // const fr = arr[3]

// const [f, s, t, fr] = arr

// console.log(f, s, t, fr);

// // spread operator

// const array = [1, 2, 3]

// const copyArray = [...array] // pass by reference & pass by value

// copyArray.push(10)

// console.log(array, copyArray)

// const obj1 = {
//     age: 20,
//     name: "John"
// }

// const obj2 = {...obj1}

// obj2.age = 30

// console.log(obj1, obj2);



// const a1 = [1, 2, 3, 4, 5];
// const a2 = [6, 7, 8, 9, 10]

// const a3 = [...a1, ...a2]

// console.log(a3);

// rest operator

const obj = {
    name: "John",
    age: 23,
    address: {
        city: "New York",
        state: "NY"
    },
    hobbies: ["Reading", "Writing", "Coding"]
}

const { hobbies, ...remainingObj } = obj

console.log(remainingObj);

const arr10 = [1, 2, 3, 4];

const [f, ...remaining] = arr10

console.log(remaining);

// callback function -> a function that is passed as an argument to another function

// function display(text) {
//     console.log(text);
// }

// function start(callback) {
//     callback("Hello World")
// }

// start(display)

function display(e, f, g) {
    console.log(e, f, g);
}

function calc(a, b, callback) {
    const s = a + b
    callback(s)
}

calc(10, 40, display)

function sumOfNNumbers(callback) {
    let sum = 0
    for (let num = 1; num <= 10; num++){
        sum += num
        callback(num, sum, 10)
    }
}

sumOfNNumbers(display)

// application

// array -> Collection of elements.


// map, filter, reduce

// map -> returns a new array with the same number of elements as the original array.
// filter -> returns a new array with matching elements.
// reduce -> returns a single value.

// arrow function -> Shorthand form of a function.

// const sum = () => 10 + 20

// console.log(sum());

const arr = [1, 2, 3, 4, 5]

const mappedArr = arr.map((element) => {
    return element * 10
})

console.log(mappedArr);

const strings = ["Hello", "World", "JavaScript", "Python", "Java"]

const mappedStrings = strings.map((string) => {
    return string.replace(string[0], string[0].toLowerCase())
})

console.log(mappedStrings);

const filteredArr = arr.filter((item) => {
    return item % 2 == 1
})

console.log(filteredArr);

const filteredString = strings.filter((string) => {
    return string.includes("l")
})

console.log(filteredString);

const result = arr.reduce((previousValue, element) => {
    return previousValue + element
}, 0)

console.log(result);


const products = [
    {
      title: "Wireless Earbuds",
      description: "Noise-canceling Bluetooth earbuds with long battery life.",
      rating: 4.5,
      price: 49.99
    },
    {
      title: "Smart Watch",
      description: "Fitness tracker with heart rate monitor and step counter.",
      rating: 4.3,
      price: 79.99
    },
    {
      title: "Gaming Mouse",
      description: "Ergonomic RGB gaming mouse with customizable buttons.",
      rating: 4.7,
      price: 29.99
    },
    {
      title: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with tactile switches.",
      rating: 4.6,
      price: 89.99
    },
    {
      title: "Portable Power Bank",
      description: "10,000mAh fast-charging power bank with dual USB ports.",
      rating: 4.4,
      price: 39.99
    },
    {
      title: "Wireless Charger",
      description: "Fast wireless charging pad for all compatible devices.",
      rating: 4.2,
      price: 25.99
    },
    {
      title: "4K Monitor",
      description: "27-inch UHD display with ultra-thin bezels and HDR support.",
      rating: 4.8,
      price: 299.99
    },
    {
      title: "Noise-Canceling Headphones",
      description: "Over-ear headphones with active noise cancellation.",
      rating: 4.5,
      price: 149.99
    },
    {
      title: "Smartphone Tripod",
      description: "Adjustable and lightweight tripod for smartphones.",
      rating: 4.1,
      price: 19.99
    },
    {
      title: "External Hard Drive",
      description: "1TB portable HDD with USB 3.0 for fast data transfer.",
      rating: 4.6,
      price: 69.99
    }
]

const filteredProducts = products.filter((product) => product.rating > 4.5)

console.log(filteredProducts);

const mappedProducts = products.map(product => {
    if (product.title == "4K Monitor") {
        // product.title = "8K Monitor"
        return {...product, title: "8K Monitor"}
    }
    return product
})

console.log(mappedProducts);