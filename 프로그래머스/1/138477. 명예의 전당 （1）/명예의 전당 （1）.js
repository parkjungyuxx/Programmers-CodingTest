function solution(k, score) {
    const answer = []
    const result = []
    
    for (let i=0; i<score.length; i++) {
        result.push(score[i])
        const sortedResult =result.sort((a,b)=> b-a).slice(0,k)
        const minNum = Math.min(...sortedResult) 
        answer.push(minNum)
        
    }
    return answer
}