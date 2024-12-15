let operation = '';
let num1 = 0;
let num2 = 0;

function calculate(op) {
    operation = op;
}

function evaluateResult() {
    num1 = parseFloat(document.getElementById('input1').value);
    num2 = parseFloat(document.getElementById('input2').value);

    let result;
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        case 'log':
            if (num1 <= 0) {
                result = 'Error: Logarithm of non-positive number';
            } else {
                result = Math.log(num1) / Math.log(num2);
            }
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        default:
            result = 'Please select an operation';
            break;
    }
    
    document.getElementById('result').innerText = result;
}