function solution(numLog) {
    let str = ""
    
    for (let i = 0; i < numLog.length; i++) {
        if (numLog[i+1] - numLog[i] === 1) str+= "w"
        if (numLog[i+1] - numLog[i] === -1) str+= "s"
        if (numLog[i+1] - numLog[i] === 10) str+= "d"
        if (numLog[i+1] - numLog[i] === -10) str+= "a"
    }
    return str
}