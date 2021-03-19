import { add, 
    subtract, 
    divide, 
    multiply
} from './utils.js';




const addInputOne = document.getElementById('first-add-value');
const addInputTwo = document.getElementById('second-add-value');
const subtractInputOne = document.getElementById('first-sub-value');
const subtractInputTwo = document.getElementById('second-sub-value');
const divideInputOne = document.getElementById('first-div-value');
const divideInputTwo = document.getElementById('second-div-value');
const multiplyInputOne = document.getElementById('first-mult-value');
const multiplyInputTwo = document.getElementById('second-mult-value');
const sumDiv = document.getElementById('sum-div');
const differenceDiv = document.getElementById('difference-div');
const quotientDiv = document.getElementById('quotient-div');
const productDiv = document.getElementById('product-div');

export function handleAddClick() {
    const value1 = Number(addInputOne.value);
    const value2 = Number(addInputTwo.value);
    const sum = add(value1, value2);

    sumDiv.textContent = sum;
}

export function handleSubtractClick() {
    const value1 = Number(subtractInputOne.value);
    const value2 = Number(subtractInputTwo.value);
    const difference = subtract(value1, value2);

    differenceDiv.textContent = difference;
}

export function handleDivideClick() {
    const value1 = Number(divideInputOne.value);
    const value2 = Number(divideInputTwo.value);
    const quotient = divide(value1, value2);

    quotientDiv.textContent = quotient;
}

export function handleMultiplyClick() {
    const value1 = Number(multiplyInputOne.value);
    const value2 = Number(multiplyInputTwo.value);
    const product = multiply(value1, value2);

    productDiv.textContent = product;
}
