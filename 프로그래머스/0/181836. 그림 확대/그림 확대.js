function solution(picture, k) {
    const result = []
    
    for (const row of picture) {
        const newRow = [...row].map(el => el.repeat(k)).join("")
        for (let r = 0; r < k; r++) {
            result.push(newRow)
        }
    }
    return result
}