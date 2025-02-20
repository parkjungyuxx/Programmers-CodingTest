function solution(binomial) {
    const b = binomial.split(" ")
    if (b[1] === "+") return Number(b[0]) + Number(b[2])
    if (b[1] === "-") return Number(b[0]) - Number(b[2])
    if (b[1] === "*") return Number(b[0]) * Number(b[2])
    
}