function solution(s) {
    let result = 0
    s = s.split(" ")
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "Z") result -= parseInt(s[i-1])
        else result += parseInt(s[i])
    }
    return result
}