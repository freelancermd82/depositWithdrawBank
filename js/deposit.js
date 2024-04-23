
document.getElementById('btn-deposit').addEventListener('click', function(){
    const previousDepositAmount = getTextInputValueById('deposit-total');
    const newDepositValue = getInputValueById('deposit-field');
    const totalDepositAmount = previousDepositAmount + newDepositValue;
    setTextInputValueById('deposit-total', totalDepositAmount);
    // balance total

    const previousBalance = getTextInputValueById('Balance-total');
    const totalNewBalance = previousBalance + newDepositValue;
    setTextInputValueById('Balance-total', totalNewBalance);
})