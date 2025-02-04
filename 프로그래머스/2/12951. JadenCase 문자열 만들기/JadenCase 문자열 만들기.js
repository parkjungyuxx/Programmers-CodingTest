function solution(s) {
    s = s.split(" ")
    const result = []
    for (let i = 0; i< s.length; i++) {
        for (let j = 0; j< s[i].length; j++) {
            if (j === 0) result.push(s[i][j].toUpperCase())
            else result.push(s[i][j].toLowerCase())
        }
        if (i === s.length-1) break;
        result.push(" ")
    }
    return result.join("")
}