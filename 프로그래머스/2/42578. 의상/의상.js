function solution(clothes) {
    const byType = new Map()
    
    for (const [name, type] of clothes) {
        byType.set(type, (byType.get(type) || 0) + 1)
    }
    
    let ways = 1
    
    for (const count of byType.values()) {
        ways *= (count + 1)
    }
    
    return ways - 1
    
}