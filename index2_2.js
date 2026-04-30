let bal = 50000

function withdraw(amt){
    if(bal<amt){
        console.log("You don't have sufficient balance");
    }
    else bal-=amt;
    return bal;
}

function deposit(amt){
    bal+=Number(amt);
    return bal;
}

function checkBalance(){
    return bal;
}

module.exports = {withdraw, deposit, checkBalance}