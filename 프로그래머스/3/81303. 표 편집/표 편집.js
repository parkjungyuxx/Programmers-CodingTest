function solution(n, k, cmd) {
    const deleted = []
    
    const up = [...new Array(n + 2)].map((_,i) => i - 1)
    const down = [...new Array(n + 1)].map((_,i) => i + 1)
    
    k+=1
    
    for (const item of cmd) {
        if (item === "C") {
            deleted.push(k)
            up[down[k]] = up[k]
            down[up[k]] = down[k]
            k = down[k] > n ? up[k] : down[k] 
        }
        else if (item === "Z") {
            const restore = deleted.pop()
            up[down[restore]] = restore
            down[up[restore]] = restore
        }
        else {
            const [move, num] = item.split(" ")
            if (move === "U") {
                for (let i = 0; i < num; i++) {
                    k = up[k]
                }
            } else {
                for (let i = 0; i < num; i++) {
                    k = down[k]
                }
            }
        }
    }
    const answer = new Array(n).fill("O")
    for (let i = 0; i < deleted.length; i++) {
        answer[deleted[i]-1] = "X"
    }
    return answer.join("")
}