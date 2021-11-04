/* Придумать, что-то, чтобы затронуть по максимуму весь материал который прошли
 и преобразование типов и математические вычисления и оператор if, switch-case циклы for, while итд. */

alert("Welcome to app - Calculator");

let firstNumber;
let secondNumber;
let operator;
let enter = true;

exitscript: while (enter) {

while (true) {
    firstNumber = prompt("Enter the first number: ", 1);
    if ( isFinite( firstNumber ) ) {
        alert(`You did enter - ${firstNumber}`);
        break; 
    }
    else alert("You didn't enter a number! If you want to exit, click Cancel");
}

while (true) {
    secondNumber = prompt("Enter the second number: ", 2);
    if ( isFinite( secondNumber ) ) {
        alert(`You did enter - ${secondNumber}`);
        break; 
    }
    else alert("You didn't enter a number! If you want to exit, click Cancel");
}

outer: while (true) {
    operator = prompt("Enter the operator + - * / ** : ", "+");
    switch ( operator ) {
        case "+":
            const resultPlus = Number(firstNumber) + Number(secondNumber);
            alert(`${firstNumber} ${operator} ${secondNumber} = ${resultPlus}`);
            break outer;

        case "-":
            const resultMinus = Number(firstNumber) - Number(secondNumber);
            alert(`${firstNumber} ${operator} ${secondNumber} = ${resultMinus}`);
            break outer;
    
        case "*":
            const resultMultiply = Number(firstNumber) * Number(secondNumber);
            alert(`${firstNumber} ${operator} ${secondNumber} = ${resultMultiply}`);
            break outer;
            
        case "/":
            const resultDivision = Number(firstNumber) / Number(secondNumber);
            alert(`${firstNumber} ${operator} ${secondNumber} = ${resultDivision}`);
            break outer;

        case "**":
            const resultExponentiation = Number(firstNumber) ** Number(secondNumber);
            alert(`${firstNumber} ${operator} ${secondNumber} = ${resultExponentiation}`);
            break outer;

        default:
            alert("You did enter underfined operator");
            break;
    }
}

enter = confirm("Do you like continue... ?");

}