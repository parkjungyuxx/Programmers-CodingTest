function solution(board, moves) {
    const lanes = [...new Array(board[0].length)].map(() => [])
    const stack = []
    let answer = 0
    
    for (let i = board.length-1; i >= 0; i--) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== 0) {
                lanes[j].push(board[i][j]) 
            }
        }
    }
    for (let i = 0; i < moves.length; i++) {
        if (lanes[moves[i]-1].length === 0) continue
        const moved = lanes[moves[i]-1].pop()
        if (stack[stack.length-1] === moved) {
            answer+=2
            stack.pop()
        } else {
            stack.push(moved)    
        }
    }
    return answer
}