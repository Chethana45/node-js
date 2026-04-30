const service = require('./index2_2.js');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function choices(){
    console.log('\nEnter 1 for withdrawal\nEnter 2 for deposit\nEnter 3 for check balance\nenter 4 for to exit');
    rl.question('Enter your option: ', (opt)=>{
        
            switch(opt){
                case '1':
                     rl.question('Enter amt to withdraw: ', (amt)=>{
                        console.log(service.withdraw(amt));
                        choices();
                    }    
                );
                    
                    break;
                case '2':
                    rl.question('Enter amt to withdraw: ', (amt)=>{
                        console.log(service.deposit(amt));
                        choices();
                    }    
                );
                    
                    break;
                case '3':
                    console.log(service.checkBalance());
                    choices();
                    break;
                case '4':
                    console.log('System exit');
                    rl.close();
                    break;
                default:
                    console.log('Invalid option');
                    choices();
            }
        
    });
}

choices();