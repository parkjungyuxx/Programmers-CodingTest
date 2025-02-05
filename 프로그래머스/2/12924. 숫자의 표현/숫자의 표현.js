function solution(n) {
    let count = 0;
    let i = 0;
    
    while (n > 0) {
        i++;
        if (n % i === 0) count++;
        n -= i
    }
    
    return count
}