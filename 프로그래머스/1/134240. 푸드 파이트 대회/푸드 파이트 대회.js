function solution(food) {
    const result = [];
    for (let i = 1; i< food.length; i++) {
        let count = Math.floor(food[i]/2)
        result.push(String(i).repeat(count))
        
        
    }
    let leftSide = result.join("")
    let rightSide = result.reverse().join("")
    const center = "0"
    const answer = leftSide + center + rightSide
    return answer
}