function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const numberBtns = document.querySelectorAll('.number-btn');
const zeroBtn = document.querySelector('.zero-btn');
const equalBtn = document.querySelector('.equal-btn');
const clearBtn = document.querySelector('.clear-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const display = document.querySelector('.display');

for(let i = 0; i < numberBtns.length; i++){
    numberBtns[i].addEventListener('click', function(){
        display.textContent += numberBtns[i].textContent;
    })
}

zeroBtn.addEventListener('click', function(){
    display.textContent += zeroBtn.textContent;
})

for(let i = 0; i < operatorBtns.length; i++){
    operatorBtns[i].addEventListener('click', function(){
        display.textContent += operatorBtns[i].textContent;
    })
}

equalBtn.addEventListener('click', function(){
    let equation = display.textContent;
    let numbers = equation.split(/\+|\-|\*|\/| /g);
    let operators = equation.replace(/[0-9]|\./g, '').split('');
    display.textContent = operate(operators[0], parseFloat(numbers[0]), parseFloat(numbers[1]));
})

clearBtn.addEventListener('click', function(){
    display.textContent = '';
})