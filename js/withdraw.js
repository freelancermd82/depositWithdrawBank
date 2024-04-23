
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const previousWithdrawAmount = getTextInputValueById('Withdraw-total');
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setTextInputValueById('Withdraw-total', newWithdrawTotal);

    // withdraw balance
    const previousBalance = getTextInputValueById('Balance-total');
    const totalNewBalance = previousBalance - newWithdrawAmount;
    setTextInputValueById('Balance-total', totalNewBalance);
})

