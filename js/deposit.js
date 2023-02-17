document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newdepositString = depositField.value;
    // console.log(typeof newdepositString);
    const newDeposit = parseFloat(newdepositString);
    // console.log(typeof newDeposit);

    const depositTotalElement = document.getElementById('deposit-total');
    const prevdepositString = depositTotalElement.innerText;
    const prevdeposit = parseFloat(prevdepositString);

    const currentDeposit = prevdeposit+newDeposit;
    depositTotalElement.innerText = currentDeposit;

    //clear field
    depositField.value='';

    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(prevBalanceTotalString);
    const currentBalanceTotal = preBalanceTotal+newDeposit;
    balanceTotal.innerText = currentBalanceTotal;

})


document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    withdrawField.value = '';
    if(isNaN(newWithdraw)){
        alert('please enter an amount');
        return;
    }
    

    const withdrawTotalElement =  document.getElementById('withdraw-total');
    const prevWithdrawString =  withdrawTotalElement.innerText;
    const prevWithdraw = parseFloat(prevWithdrawString);

    

    

    const balanceTotal =  document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(prevBalanceTotalString);

    if(newWithdraw>preBalanceTotal){
        alert('You dont have suffecient balance');
        return;
    }
    const currentWithdraw = prevWithdraw+newWithdraw;
    withdrawTotalElement.innerText = currentWithdraw;
    

    const currentBalanceTotal = preBalanceTotal - newWithdraw;
    balanceTotal.innerText = currentBalanceTotal;

    
})