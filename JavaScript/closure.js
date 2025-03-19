// closure -> a function that has access to the variables of its parent function even after the parent function has returned.

const outerFunction = () => {
    let value = 0
    const innerFunction = () => {
        value++
        console.log(value);
    }
    return innerFunction
}

const func = outerFunction();

// func()
// func()
// func()
// func()
// func()
// func()

// curring -> a function that takes multiple arguments and returns a function that takes a single argument.

// const volume = (l, b, h) => {
//     return l * b * h
// }

// console.log(volume(10,20,30));

const volume = (l) => {
    console.log("Length = " + l);
    return (b) => {
        console.log("Width = " + b);
        const area = l * b
        console.log("Area = " + area);
        return (h) => {
            console.log("Height = " + h);
            return area * h
        }
    }
}

const res1 = volume(10)

const res2 = res1(30)

const val = res2(50)

console.log(val);

// Map constructor -> A map is a collection of key-value pairs.

const map = new Map()

map.set("name", "John Doe")
map.set("age", 25)
map.set("place", "New York")

console.log(map.get("place"));

console.log(map.delete("name"));

console.log(map.has("name"));

map.clear()

console.log(map.size);

console.log(map);

// Set Constructor -> A set is a collection of unique values.

const set = new Set()

set.add(10)
set.add(20)
set.add(30)
set.add(30)
set.add(40)
set.add(30)

// const arr = Array.from(set)

// const res = new Set(arr)

// console.log(res);

// console.log(set.size);

// set.delete(40)

// console.log(set.has(40));

// set.clear()

console.log(set);

// memoization -> caching the results of expensive operations.

const cache = new Map()

const sum = (a, b) => {
    const key = a + "," + b
    if (cache.has(key)) {
        console.log("Stored value in cache...");
        return cache.get(key)  
    }
    console.log("Calculating sum...");
    const s = a + b
    cache.set(key, s)
    return s
}

// console.log(sum(10,20));
// console.log(sum(10,20));
// console.log(sum(30,80));
// console.log(sum(30,80));
// console.log(sum(10,20));
// console.log(sum(10,20));
// console.log(sum(10, 20));

const store = new Map()

const getUserInfo = async (userId) => {
    try {
        if (store.has(userId)) {
            return store.get(userId)
        }
        console.log("Fetching user info...");
        const response = await fetch("https://dummyjson.com/users/" + userId)
        const result = await response.json()
        store.set(userId, result)
        return result
    } catch (error) {
        console.log(error);   
    }
}

const getInfo = async () => {
    let res = await getUserInfo(1)
    console.log(res);
    res = await getUserInfo(1)
    console.log(res);
    res = await getUserInfo(1)
    console.log(res);
    res = await getUserInfo(2)
    console.log(res);
    res = await getUserInfo(1)
    console.log(res);
}

getInfo()