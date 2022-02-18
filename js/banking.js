function getInput(inpuId){
    const inputField = document.getElementById(inpuId);
    const inputDeposit = inputField.value;
    const inputValue = parseFloat(inputDeposit);
    inputField.value = '';
    return inputValue;
}

function updatewd(depositValue, totalFieldId){
    const depositTotal = document.getElementById(totalFieldId);
    const currentAmount = depositTotal.innerText;
    const newDepositAmount = parseFloat(currentAmount) + depositValue;
    depositTotal.innerText = newDepositAmount;
}

function updateBalance(depositValue,issAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceText);
    
    if(issAdd == true){
        balanceTotal.innerText = currentBalance+depositValue;
    }
    else{
        balanceTotal.innerText = currentBalance-depositValue;
    }
}
// Deposite 

document.getElementById('deposit-button').addEventListener('click',function(){


    const depositValue = getInput('user-deposit');
    
    if(depositValue>0){
        updatewd(depositValue , 'deposit-total' );
     
        updateBalance(depositValue, true);
    }
    else{
        depositValue.onclick(alert('Please Put Integer Value'));
           // ei else correct way na.error dekhay bt kaj kore
    }
  
 
})
// Withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    
   
    const withdrawTotal  = getInput('user-withdraw');
   
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceText);
    if(withdrawTotal>0 && withdrawTotal<currentBalance ){
        updatewd(withdrawTotal , 'withdraw-total');

        updateBalance(withdrawTotal, false);
    }
    else{
        withdrawTotal.onclick(alert('Please Put Integer Value or correct amount'));
        // ei else correct way na.error dekhay bt kaj kore

    }
 
})







