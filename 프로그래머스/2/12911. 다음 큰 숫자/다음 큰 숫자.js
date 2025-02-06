function solution(n) {
    const numberOfOne = n.toString(2).split("").reduce((acc,num) => parseInt(acc)+parseInt(num),0)
    let startNum = n+1
    
    while (true) {
        if (startNum.toString(2).split("").reduce((acc,num) => parseInt(acc) + parseInt(num),0) === numberOfOne) return startNum
    
        startNum++
    }
}