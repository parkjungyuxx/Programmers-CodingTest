function solution(n, lost, reserve) {
    const filteredLost = lost.filter((el) => !reserve.includes(el)).sort((a,b)=> a-b)
    const filteredReserve = reserve.filter((el) => !lost.includes(el)).sort((a,b) => a-b)
    
    for (let i = 0; i < filteredReserve.length; i++) {
        const prev = filteredReserve[i] - 1
        const next = filteredReserve[i] + 1
        
        if (filteredLost.includes(prev)) {
            filteredLost.splice(filteredLost.indexOf(prev),1)
        } else if (filteredLost.includes(next)) {
            filteredLost.splice(filteredLost.indexOf(next),1)
        }
    } return n - filteredLost.length
}