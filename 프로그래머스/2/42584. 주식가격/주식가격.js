function solution(prices) {
    const n = prices.length
    const answer = new Array(n).fill(0)
    const stack = [0]
    
    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length-1]]) {
            const c = stack.pop()
            answer[c] = i - c
        }
        stack.push(i)
    }
    while (stack.length > 0) {
        const c = stack.pop()
        answer[c] = n - 1 - c
    }
    
    return answer
    
}