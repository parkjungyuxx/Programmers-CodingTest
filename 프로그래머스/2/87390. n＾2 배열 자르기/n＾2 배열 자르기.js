function solution(n, left, right) {
    const result = []
    for (let i = left; i <= right; i++) {
        const r =  Math.floor(i/n)
        const c = i % n
        result.push(Math.max(r,c) + 1)
    }
    return result
}