function solution(a, b, n) {
    let result = 0;
    
    while ( n >= a ) {
        const newBottles =  Math.floor(n/a) * b;
        result += newBottles
        n = n % a + newBottles
    }
    return result
}