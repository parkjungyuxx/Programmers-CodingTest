function solution(N, stages) {
    const failureRates = [];
    
    for (let stage = 1; stage <= N; stage++) {
        const playerReached = stages.filter((playerStage) => playerStage >= stage).length;
        const playerFailed = stages.filter((playerStage) => playerStage === stage).length
        
        const failureRate = playerReached > 0 ? playerFailed/playerReached : 0
        failureRates.push({stage, failureRate})
        
    }
    
    const sortedFailureRates = failureRates.sort((a,b) => {
        if (a.failureRate !== b.failureRate) {
            return b.failureRate - a.failureRate
        }
        return a.stage - b.stage;
    })
return sortedFailureRates.map(({stage})=> stage)
}