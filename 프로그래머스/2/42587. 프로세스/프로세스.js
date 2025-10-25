function solution(priorities, location) {
    const q = priorities.map((el, i) => [i, el])
    let order = 0
    
    while (q.length) {
        const [index, number] = q.shift()
        
        const hasHigher = q.some(([_, el]) => el > number)
        
        if (hasHigher) {
            q.push([index,number])
        } else {
            order += 1
            if (index === location) return order
        }
    }
    return -1
}