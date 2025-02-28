// DOM -> Document Object Model -> Programming interface for web documents
// DOM is used to access the HTML elements, manipulate the HTML elements, change the style of the HTML elements and handle events.

// DOM Methods

// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()

const element = document.getElementById("demo1")

console.log(element.innerText);

element.innerHTML = "<b>Hello</b>"

element.style.color = "rgba(210, 6, 9, 0.3)"
element.style.fontSize = "30px"

const elements = document.getElementsByClassName("class-1")

console.log(elements);

console.log(elements[0].innerHTML);

elements[0].innerText = "<b>Hello</b>"
const style = elements[1].style
style.color = "rgba(210, 6, 9, 0.3)"
style.fontSize = "30px"
style.backgroundColor = "rgba(210, 6, 9, 0.3)"
style.padding = "20px"

const elems = document.getElementsByTagName("div")

console.log(elems);

elems[3].innerHTML = "<b>Hello</b>"

const styles = elems[3].style
styles.color = "rgba(210, 6, 9, 0.3)"
styles.fontSize = "30px"
styles.backgroundColor = "rgba(210, 6, 9, 0.3)"
styles.padding = "20px"

// querySelector()
// querySelectorAll()

const elms = document.querySelector(".class-1") // single element -> same methods as getElementById()

console.log(elms);

const elemss = document.querySelectorAll(".class-1") // multiple elements -> same methods as getElementsByClassName() / getElementsByTagName()

console.log(elemss);

// Form Validation


