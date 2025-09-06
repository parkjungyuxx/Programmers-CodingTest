function solution(cards1, cards2, goal) {
    let num1 = 0
    let num2 = 0
    
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[num1]) {
            num1++
        } else if (goal[i] === cards2[num2]) {
            num2++
        } else {
            return "No"
        }
    }
    return "Yes"
}