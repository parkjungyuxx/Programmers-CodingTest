function solution(s){
    const pword = s.toLowerCase().split("").filter((el) => el === "p")
    const yword = s.toLowerCase().split("").filter((el) => el === "y")
    
    
    
    if (pword.length === yword.length || pword.length === yword.length === 0) return true 
    else return false
}