function solution(x, n) {
    const result = []
    
    for (let i = x; result.length < n; i+=x) {
        result.push(i)
    }
    
    return result
}