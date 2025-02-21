// // DOM -> Document Object Model -> Programming interface to access and manipulate the content, structure, style and manage events of documents.

// // getElementById("<id>"), getElementByClassName("<class>"), getElementsByTagName("<tag>")

// const element = document.getElementById("first")

// console.log(element);

// element.innerHTML = "<b>This is new text</b>"

// element.style.color = "red"
// element.style.backgroundColor = "black"
// element.style.fontSize = "30px"
// element.style.padding = "20px"

// const elements = document.getElementsByClassName("demo")

// elements[1].innerHTML = "Hi"

// elements[1].style.color = "red"
// elements[1].style.backgroundColor = "black"
// elements[1].style.fontSize = "30px"
// elements[1].style.padding = "20px"
// elements[1].style.marginTop = "20px"

// console.log(elements);

// const elems = document.getElementsByTagName("div")

// elems[1].innerHTML = "Hi"

// elems[1].style.color = "green"
// elems[1].style.backgroundColor = "black"
// elems[1].style.fontSize = "30px"
// elems[1].style.padding = "20px"
// elems[1].style.marginTop = "50px"

// console.log(elems);

// const elem = document.querySelector(".demo") // first match - single match
// // same methods and properties as getElementById

// elem.innerHTML = "Hello World"

// elem.style.color = "blue"

// const elems2 = document.querySelectorAll("div") // all matches - multiple matches
// // same as getElementByTagName or getelementsByClassName

// console.log(elems2);

const error = document.getElementsByClassName("error")

function handleSubmit() {
    
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    
    if (username == "") {
        error[0].innerHTML = "Username is required"
        return false
    }
    if (username.length < 4 || username.length > 12) { 
        error[0].innerHTML = "Username must be between 4 and 12 characters"
        return false
    }
    if (password == "") {
        error[1].innerHTML = "Password is required"
        return false
    }
    if (password.length < 8 || password.length > 16) {
        error[1].innerHTML = "Password must be between 8 and 16 characters"
        return false
    }
    error[0].innerHTML = ""
    error[1].innerHTML = ""
    return false
}
