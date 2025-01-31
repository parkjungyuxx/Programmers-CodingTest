function solution(d, budget) {
    d = d.sort((a,b) => a-b) 
    let total = 0;
    let count = 0;
    
    for (let i = 0; i < d.length; i++) {
        if (total + d[i] > budget) break;
        total += d[i]
        count ++
    }
    
    return count
}