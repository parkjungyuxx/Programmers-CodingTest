function solution(s) {
    if (s.length > 100) return 
    if (s.length === 1) return s
    var answer = ""
    let average = Math.ceil(s.length/2) 
    
    if (s.length % 2 === 0)  {
        answer = s[average-1] + s[average]
    }
    else answer = s[average-1]
    
    return answer
    
}