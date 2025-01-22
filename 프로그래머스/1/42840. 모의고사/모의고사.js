const solution = (answers) => {
    const patterns = {
        first: [1,2,3,4,5],
        second: [2,1,2,3,2,4,2,5],
        third: [3,3,1,1,2,2,4,4,5,5],
    }
    
    const score = [0,0,0]
    
    for (let i = 0; i < answers.length; i++) {
        if(answers[i] === patterns.first[i % patterns.first.length]) score[0]++
        if(answers[i] === patterns.second[i % patterns.second.length]) score[1]++
        if(answers[i] === patterns.third[i % patterns.third.length]) score[2] ++
    }
    
    const maxScore = Math.max(...score)
    const result = score.map((score,index) => score === maxScore ? index+1 : null).filter((el)=> el !== null)
    
    return result
}