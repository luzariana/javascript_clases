function bark() {
    console.log("WOOF");
}

bark()

console.log("A")
bark()
console.log("B")

let happyFace = ":)"

function greeting(pName, pLastname) {
    let msj = "Hello " + pName + " " + pLastname + " " + happyFace
    console.log(msj)
}
//pname en function = parametro, greeting("Ariana") argumento 

//console.log(msj)

// greeting("Ariana", "Montes")
// greeting("Montes", "Angel")
// greeting("Ricardo")

function addTwoNumbers(A, B) {
    return A + B
}

//let Total = addTwoNumbers(2, 3)
//console.log(Total)

function substractTwoNumbers(A, B) {
    return A - B
}

function multiplyTwoNumbers(A, B) {
    return A * B
}

function divideTwoNumbers(A, B) {
    return A / B
}

function operateTwoNumbers(A, B, operator) {
    if (operator == "+") {
        let total = addTwoNumbers(A, B)
        return total
    } else if (operator == "-") {
        let total = substractTwoNumbers(A, B)
        return total
    } else if (operator == "*") {
        let total = multiplyTwoNumbers(A, B)
        return total
    } else if (operator == "/") {
        let total = divideTwoNumbers(A, B)
        return total
    } else {
        return "bad opertor"
    }
}

let total = operateTwoNumbers(2, 3, "+")

console.log(operateTwoNumbers(2, 3, "+"))
console.log(operateTwoNumbers(2, 3, "-"))
console.log(operateTwoNumbers(2, 3, "*"))
console.log(operateTwoNumbers(2, 3, "/"))
console.log(operateTwoNumbers(2, 3, "l"))