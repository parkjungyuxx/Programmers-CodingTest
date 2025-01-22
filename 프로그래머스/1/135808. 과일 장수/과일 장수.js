function solution(k, m, score) {
    const sortedScore = score.sort((a, b) => b - a);

    let result = 0;
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        const box = sortedScore.slice(i * m, i * m + m)
        const minScore = box[m - 1]; 
        result += minScore * m; 
    }
    return result;
}