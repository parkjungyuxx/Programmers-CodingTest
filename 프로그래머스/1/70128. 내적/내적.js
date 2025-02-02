function solution(a, b) {
    const result = []
    for (let i = 0; i< a.length; i++) {
        result.push(a[i]*b[i])
    }
    
    return result.reduce((acc,num)=>acc+num)
}