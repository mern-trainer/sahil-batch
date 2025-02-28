function handleValidation() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirm_password = document.getElementById("confirm_password").value

    if (name == "" || email == "" || password == "" || confirm_password == "") {
        alert("All fields are required")
        return false
    }
    if (name.length < 4 || name.length > 12) {
        alert("Name must be between 4 to 12 characters")
        return false
    }
    if (!email.includes("@") && !email.includes(".")) {
        alert("Invalid email")
        return false
    }
    if(password.length < 8 || password.length > 16){
        alert("Password must be between 8 to 16 characters")
        return false
    }
    if(password != confirm_password){
        alert("Password does not match")
        return false
    }
    alert("Form submitted successfully")
    return false
}