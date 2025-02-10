function solution(n) {
    const divisor = 1234567;
    
    if (n===1) return 1
    if (n===2) return 2
    
    let a = 1, b = 2, temp;
    
    for (let i = 3; i <= n; i++) {
        temp = (a + b) % divisor
        a = b;
        b = temp;
    }
    return  b;
}