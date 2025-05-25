function solution(sizes) {
    let max = [];
    let min = [];
    
    for (let i = 0; i < sizes.length; i++) {
        max.push(Math.max(sizes[i][0],sizes[i][1]));
        min.push(Math.min(sizes[i][0],sizes[i][1]));
    }
    
    const sortedMax = max.sort((a,b) => b-a)
    const sortedMin = min.sort((a,b) => b-a)
    
    return sortedMax[0]*sortedMin[0]
}