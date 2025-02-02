function solution(left, right) {
    const  even = [];
    const  odd = [];
    let sum = 0;
    
    for (let i = left; i<= right; i++){
        const divisor = []
        for (let j = 1; j<=i; j++) {
            if (i % j === 0) divisor.push(j)
        }    
        divisor.length % 2 === 0 ? even.push(divisor[divisor.length-1]) : odd.push(divisor[divisor.length-1])
    }
    sum = even.reduce((acc,num)=>acc+num) - odd.reduce((acc,num)=>acc+num)
    
    return sum
}