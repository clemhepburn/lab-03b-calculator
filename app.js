// import functions and grab DOM elements

import { 
    handleAddClick, 
    handleSubtractClick, 
    handleMultiplyClick, 
    handleDivideClick 
} from './clickHandlers.js';

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const divideButton = document.getElementById('divide-button');
const multiplyButton = document.getElementById('multiply-button');

addButton.addEventListener('click', handleAddClick);
subtractButton.addEventListener('click', handleSubtractClick);
divideButton.addEventListener('click', handleDivideClick);
multiplyButton.addEventListener('click', handleMultiplyClick);