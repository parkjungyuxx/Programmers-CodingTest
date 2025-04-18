function solution(lottos, win_nums) {
    const numberOfCorrect = lottos.filter((el) => win_nums.includes(el)).length
    const numberOfZero = lottos.filter((el) => el === 0).length
    const Max = numberOfCorrect + numberOfZero
    const Min = numberOfCorrect
    
    const result = []
    switch (Max) {
        case 6 : result.push(1)
            break;
        case 5 : result.push(2)
            break;
        case 4: result.push(3)
            break;
        case 3: result.push(4)
            break;
        case 2: result.push(5)
            break;
        default : result.push(6)
            break;
    } 
    switch (Min) {
        case 6 : result.push(1)
            break;
        case 5 : result.push(2)
            break;
        case 4: result.push(3)
            break;
        case 3: result.push(4)
            break;
        case 2: result.push(5)
            break;
        default : result.push(6)
            break;
    } 
    return result
}