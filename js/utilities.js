
function getTextInputValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const previousTextElement = parseFloat(textElementString);
    return previousTextElement;
}
function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const previousInputValue = parseFloat(inputFieldString);
    return previousInputValue;
}
function setTextInputValueById(elementId, newValue) {
    const setText = document.getElementById(elementId);
    setText.innerText = newValue;
}