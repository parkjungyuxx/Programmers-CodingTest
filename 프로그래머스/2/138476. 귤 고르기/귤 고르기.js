function solution(k, tangerine) {
    let countMap = new Map()
    let count = 0;
    let sum = 0;
    
    for (let size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1)
    }
    let sortedMap = [...countMap].sort((a,b) => b[1]-a[1])
    
    for (let i = 0; i < sortedMap.length; i++) {
        if (sum < k) {
            sum += sortedMap[i][1]
            count ++
        }
        if (sum >= k) return count
    }
}