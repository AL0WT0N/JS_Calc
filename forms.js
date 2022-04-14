"use strict";
// calc buttons
let calcBtns = document.querySelectorAll(".calc-btn");

// clear results button
let clearButton = document.querySelector("#clearResults")

// input/ouput
let valueFieldOne = document.querySelector("#valueOne");
let valueFieldTwo = document.querySelector("#valueTwo");
let resultField = document.querySelector("#resultField");
let resultsArea = document.querySelector("#resultsArea");

// Add to result history
const addToResults = (num1, num2, operator, result) => {
    const p = document.createElement("p");
    const text = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    p.appendChild(text);
    resultsArea.appendChild(p);
}

const performCal = (event) => {
    let calc = event.target.id;
    let num1 = Number.parseInt(valueFieldOne.value);
    let num2 = Number.parseInt(valueFieldTwo.value);
    let result;
    switch(calc) {
        case "addbtn":
            result = num1 + num2;
            resultField.value = result;
            addToResults(num1, num2, "+", result)
            break;
        case "subbtn":
            result = num1 - num2;
            resultField.value = result;
            addToResults(num1, num2, "-", result)
            break;
        case "mulbtn":
            result = num1 * num2;
            resultField.value = result;
            addToResults(num1, num2, "x", result)
            break;
        case "divbtn":
            result = num1 / num2;
            resultField.value = result;
            addToResults(num1, num2, "/", result)
            break;
        default:
        resultField.value = "WTF?"
    }
}

const clearResults = () => {
    resultsArea.innerHTML = "";
}

clearButton.addEventListener("click", clearResults);

calcBtns.forEach(btn => {btn.addEventListener("click", performCal);});