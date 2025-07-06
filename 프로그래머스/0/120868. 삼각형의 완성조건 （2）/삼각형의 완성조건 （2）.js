function solution(sides) {
    const maxNum = Math.max(...sides)
    const minNum = Math.min(...sides)
    const first = []
    const second = []
    
    for (let i = maxNum-minNum+1; i <= maxNum; i++) {
        if (i === 0) continue;
        first.push(i)
    }
    
    for (let i = maxNum+1; i < maxNum+minNum; i++) {
        second.push(i)
    }
    
    return first.length + second.length
}