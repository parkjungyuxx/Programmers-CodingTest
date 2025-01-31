function solution(n) {
    const transformedNum =  n.toString(3).split("").reverse().join("")
    const result =  transformedNum.toString(2)
    return parseInt(result,3)
}