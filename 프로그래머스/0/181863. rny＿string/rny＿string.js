function solution(rny_string) {
    const result = []
    
    for (let i = 0; i < rny_string.length; i++) {
        if (rny_string[i] === "m") result.push("rn")
        else result.push(rny_string[i])
    }
    
    return result.join("")
}