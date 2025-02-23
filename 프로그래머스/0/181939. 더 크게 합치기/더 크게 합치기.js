function solution(a, b) {
    const sum1 = a.toString()+b.toString();
    const sum2 = b.toString()+a.toString();
    
    return Math.max(sum1,sum2)
    
}