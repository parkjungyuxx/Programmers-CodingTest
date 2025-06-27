function solution(s) {
    let sameNum = 0;
    let otherNum = 0;
    let currentNum = s[0]
    let result = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === currentNum) sameNum++
        else otherNum++
        
        if (sameNum === otherNum) {
            result++
            currentNum = s[i+1]
            sameNum = 0
            otherNum = 0
        }
    }
    
    if (sameNum !== 0 || otherNum !== 0) result++
    return result
}