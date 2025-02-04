function solution(s) {
    s = s.split(" ").map((el) => Number(el))
    maxNum = Math.max(...s)
    minNum = Math.min(...s)
    
    return [minNum,maxNum].join(" ")
}