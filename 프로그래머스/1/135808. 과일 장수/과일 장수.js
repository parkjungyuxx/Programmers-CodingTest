function solution(k, m, score) {
    const sortedScore = score.sort((a,b) => b-a);
    const numberOfBox = Math.floor(score.length/m)
    
    let result = 0;
    for (let i = 0; i < numberOfBox; i++) {
        const box = sortedScore.slice(i*m, i*m+m);
        result += box[m-1] * m;
    }
    
    return result;
}