
let calculator = () => {
    var num1 = +prompt("Enter First Number")
    var num2 = +prompt("Enter Second Number")
    var operation = prompt("Enter Operation you want to perform, Either Addition, Subtraction, Multiplication or Division").toLowerCase()
    
    var addition = num1 + num2
    var subtraction = num1 - num2
    var multiplication = num1 * num2
    var division = num1 / num2

    if (operation === "addition"){
        alert(`Your Output is: ${addition}`)
    }
    else if (operation === "subtraction"){
        alert(`Your Output is: ${subtraction}`)
    }
    else if (operation === "multiplication"){
        alert(`Your Output is: ${multiplication}`)
    }
    else if (operation === "division"){
        alert(`Your Output is: ${division}`)
    }
    else{
        alert(`Enter a Valid Operation`)
    }
}


