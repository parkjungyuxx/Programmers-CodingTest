function solution(a, b) {
    const sum1 = a.toString() + b.toString()
    const sum2 = 2 * a * b
    
    return Math.max(sum1,sum2)
}