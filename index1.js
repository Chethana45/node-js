const calculate = require('./index1_1.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let answers = [];
let num = 0;

function askQuestion(){
    if(num<4){rl.question(`Enter answer for question ${num+1}:`, 
        (ans)=>{
            answers.push(ans);
            num++;
            askQuestion();
        })
    }else{
        const score = calculate.calculateScore(answers);
        console.log(score);
        rl.close();
    }
}

askQuestion();
