function solution(a, b) {
    if (a % 2 === 1 && b % 2 === 1) return a**2+b**2
    if (a % 2 === 1 || b % 2 === 1) return 2*(a+b)
    if (a % 2 !== 1 && b % 2 !== 1) return Math.abs(a-b)
    
}