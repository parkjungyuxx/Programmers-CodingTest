function solution(N, stages) {
    // 1. 플레이어 수
    // 2. 스테이지 총 수
    // 3. 실패율
    
    let challengers = new Array(N + 2).fill(0)
    
    for (const stage of stages) {
        challengers[stage] += 1
        
    }
    
    const fails = {}
    let total = stages.length
    
    for (let i = 1; i <= N; i++) {
        if (challengers[i] === 0) {
            fails[i] = 0
            continue
        }
        fails[i] = challengers[i] / total
        total -= challengers[i]
    }
    const result = Object.entries(fails).sort((a,b) => b[1] - a[1])
    
    return result.map((v) => Number(v[0]))
}