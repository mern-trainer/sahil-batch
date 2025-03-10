// synchronous javascript -> executed line by line
// asynchronous javascript -> multple tasks can be executed at the same time
// promise, async await

// setTimeout(() => {
//     console.log("Executed after 3 seconds");
// }, 3000) // ms -> milli seconds

// console.log("Hi");

// promise -> used to handle asynchronous operations

// 3 states -> pending, fulfilled, rejected

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Executed after 5 seconds");
//     }, 5000);
// })

// promise.then((response) => {
//     console.log(response)
// }).catch((error) => {
//     alert(error)
// })

// console.log("Hi");

// const promiseFunc = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Executed after 5 seconds");
//         }, 5000);
//     })
// }

// promiseFunc().then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error);
// })

// async await -> used to handle asynchronous operations

// const asyncFunc = async () => {
//     const response = await promiseFunc()
//     console.log(response);
// }

// asyncFunc()

// async function func(){

// }

// fetch -> used to fetch data from the server

const getUsers = async () => {
    const response = await fetch("https://dummyjson.com/users?limit=20")
    const data = await response.json()
    for (let i = 0; i < data.users.length; i++){
        document.writeln("<h1>" + data.users[i].firstName + " " + data.users[i].lastName + "</h1>")
    }
}

getUsers()