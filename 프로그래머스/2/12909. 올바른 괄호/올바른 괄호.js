function solution(s){
    let leftCount = 0;
    let rigthCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (leftCount < rigthCount) return false
        if (s[i] === "(") leftCount ++
        if (s[i] === ")") rigthCount ++
    }
    if (leftCount === rigthCount) return true
    else return false
}