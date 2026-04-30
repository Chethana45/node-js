const answers = ["a", "c", "d", "e"];

function calculateScore(answer){
    let score = 0;
    for(let i=0;i<answers.length;i++){
        if(answer[i]==answers[i]) score++;
    }
    return score;
}

module.exports = {calculateScore};