// import functions and grab DOM elements
const addInputOne = document.getElementById('first-add-value');
const addInputTwo = document.getElementById('second-add-value');
const subtractInputOne = document.getElementById('first-sub-value');
const subtractInputTwo = document.getElementById('second-sub-value');
const divideInputOne = document.getElementById('first-div-value');
const divideInputTwo = document.getElementById('second-div-value');
const multiplyInputOne = document.getElementById('first-mult-value');
const multiplyInputTwo = document.getElementById('second-mult-value');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const sumDiv = document.getElementById('sum');
const differenceDiv = document.getElementById('difference');
const quotientDiv = document.getElementById('quotient');
const productDiv = document.getElementById('product');
// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const sum = Number(addInputOne.value) + Number(addInputTwo.value);
    sumDiv.textContent = sum;
});
subtractButton.addEventListener('click', () => {
    const difference = Number(subtractInputOne.value) - Number(subtractInputTwo.value);
    differenceDiv.textContent = difference;
});
divideButton.addEventListener('click', () => {
    const quotient = Number(divideInputOne.value) / Number(divideInputTwo.value);
    quotientDiv.textContent = quotient;
});
multiplyButton.addEventListener('click', () => {
    const product = Number(multiplyInputOne.value) * Number(multiplyInputTwo.value);
    productDiv.textContent = product;
});