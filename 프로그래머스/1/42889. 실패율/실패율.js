function solution(N, stages) {
    // 실패율 = 스테이지에 도달 했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
    // 1. 도전자 수
    // 2. 실패율
    
    const challengers = new Array(N+2).fill(0)
    
    for (const stage of stages) {
        challengers[stage] += 1
    }
    
    const fails = {}
    let sLength = stages.length
    
    for (let i = 1; i <= N; i++) {
        if (challengers[i] === 0) {
            fails[i] = 0;
            continue;
        }
        
        fails[i] = challengers[i] / sLength
        sLength -= challengers[i]
    }
    const result = Object.entries(fails)
    return result.sort((a,b) => b[1] - a[1]).map((v) => Number(v[0]))
}