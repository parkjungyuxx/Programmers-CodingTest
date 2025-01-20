function solution(dartResult) {
    const scores = [];
    let currentScore = '';
    
    for (let i = 0; i < dartResult.length; i++) {
        const char = dartResult[i];
        
        if (!isNaN(char)) {

            if (char === '0' && currentScore === '1') {
                currentScore = '10';
            } else {
                if (currentScore) scores.push(parseInt(currentScore));
                currentScore = char;
            }
        } else {
            switch (char) {
                case 'S': 
                    currentScore **= 1;
                    break;
                case 'D': 
                    currentScore **= 2;
                    break;
                case 'T': 
                    currentScore **= 3;
                    break;
                case '*': 
                    scores.push(parseInt(currentScore))
                    currentScore = ""
                    scores[scores.length - 1] *= 2;
                    if (scores.length > 1) {
                        scores[scores.length - 2] *= 2;
                    }
                    break;
                case '#': 
                    scores.push(parseInt(currentScore))
                    currentScore = ""
                    scores[scores.length - 1] *= -1;
                    break;
                default:
                    scores.push(parseInt(currentScore));
                    currentScore = '';
                    break;
            }
        }
    }
    
    if (currentScore) scores.push(parseInt(currentScore));
    return scores.reduce((acc, cur) => acc + cur, 0);
}


