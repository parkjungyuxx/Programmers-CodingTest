function solution(s, skip, index) {
    const skipSet = new Set(skip.split("").map((num) => num.charCodeAt()))
    const result = []
    
    for (let ch of s) {
        let code = ch.charCodeAt()
        let count = 0
        
        while (count < index) {
            code++
            if (code > 122) code = 97
            if (skipSet.has(code)) continue
            count++
        }
        result.push(String.fromCharCode(code))
    }
    return result.join("")
}