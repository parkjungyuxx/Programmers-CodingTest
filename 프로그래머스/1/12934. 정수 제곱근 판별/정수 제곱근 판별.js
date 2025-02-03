function solution(n) {
    
    const num = Math.sqrt(n)
    
    if (Number.isInteger(num)) return (num+1)*(num+1)
    else return -1
    
}
