function solution(a, b, c) {
    const sum1 = a + b + c;
    const sum2 = a ** 2 + b ** 2 + c ** 2;
    const sum3 = a ** 3 + b ** 3 + c ** 3;
    
    if (a === b && b === c) return sum1 * sum2 * sum3
    if (a === b || a === c || b === c) return sum1 * sum2
    if (a !== b !== c) return sum1
}