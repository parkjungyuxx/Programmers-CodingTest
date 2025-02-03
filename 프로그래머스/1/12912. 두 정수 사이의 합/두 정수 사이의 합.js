function solution(a, b) {
    
    const result = []
    
    const higher = Math.max(a,b)
    const lower = Math.min(a,b)
    
    for (let i = lower; i<=higher ; i++) {
        result.push(i)
    }
    
    if (result.length === 0) return 0
    
    return result.reduce((acc, num) => acc+num)
}