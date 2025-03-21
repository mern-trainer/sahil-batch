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

console.log(sum(10));

// sum(4) => 10
// sum(3) => 6
// sum(2) => 3
// sum(1) => 1
// sum(0) => 0