function solution(n) {
    const divisor = 1234567
    let a = 0;
    let b = 1;
    let result = 1;
    
    for (let i = 2; i <= n; i++) {
        result = (a+b)%divisor
        a = b;
        b = result;
        
    }

    
    return b
}