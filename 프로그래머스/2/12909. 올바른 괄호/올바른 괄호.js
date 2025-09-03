function solution(s){
    if (s[0] === ")" || s[s.length-1] === "(") return false
    const result = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") result.push(s[i])
        else result.pop()
    }
    
    if (result.length === 0) return true
    else return false
}