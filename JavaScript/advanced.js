// 1. JavaScript -> JavaScript is used to create interactive and dynamic web pages.
// 2. Variable -> Container to store data values.
// 3. Identifiers -> Name of the variable, functions, etc.
// 4. functions -> block of code to perform a task.
// 5. Data types -> Type of data stored in a variable.
// 6. String -> Collection of characters.
// 7. Array -> Collection of elements.
// 8. keywords -> Reserved words in javaScript.
// 9. DOM -> Programing interface for web documents to access the HTML elements,
//           manipulate the HTML elements, change the style of the HTML elements and handle events.
// 10. DOM Methods -> getElementById(), getElementsByClassName(),
//                    getElementsByTagName(), querySelector(), querySelectorAll().
// 11. Event -> Event is an action that occurs on the web page.
// 12. let -> Re-declaration is not allowed, Re-assignment is allowed.
// 13. const -> Re-declaration is not allowed, Re-assignment is not allowed.
// 14. var -> Re-declaration is allowed, Re-assignment is allowed.
// 15. loop -> A loop is a sequence of instructions that is repeated until a certain
//             condition is met.
// 16. switch -> A switch statement is a conditional statement that allows you to
//               execute different blocks of code based on different conditions.
// 17. if-else -> An if-else statement is a conditional statement that allows you to
//                execute different blocks of code based on different conditions.
// 18. for -> A for loop is a loop that executes a block of code a certain number of times.
// 19. while -> A while loop is a loop that executes a block of code as long as a certain
//              condition is true.
// 20. do-while -> A do-while loop is a loop that executes a block of code once, and then
//                 repeatedly executes the block of code as long as a certain
//                 condition is true.

// 5 times.

// object, destructure, spread operator, rest operator

// object -> collection of properties and methods.
// Collection of keys and values.

const obj = {
    name: "John", // string
    age: 23, // number
    address: {
        city: "New York", // string
        state: "NY" // string
    }, // object
    hobbies: ["Reading", "Writing", "Coding"] // array
}

obj.sdflsdf = 2309

// obj.age = 30
// obj.hobbies.splice(1, 2)

console.log(obj);

// const name = obj.name
// const age = obj.age
// const address = obj.address
// const hobbies = obj.hobbies

// console.log(name, age, address, hobbies);

// destructure

const { name, age, address, hobbies } = obj;

console.log(name, age, address, hobbies);

const arr = [1, 2, 3, 4]

// const f = arr[0]
// const s = arr[1]
// const t = arr[2]
// const fr = arr[3]

const [f, s, t, fr] = arr

console.log(f, s, t, fr);

// spread operator

const array = [1, 2, 3]

const copyArray = [...array] // pass by reference & pass by value

copyArray.push(10)

console.log(array, copyArray)

const obj1 = {
    age: 20,
    name: "John"
}

const obj2 = {...obj1}

obj2.age = 30

console.log(obj1, obj2);



const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10]

const a3 = [...a1, ...a2]

console.log(a3);



