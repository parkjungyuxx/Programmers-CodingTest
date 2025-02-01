function solution(price, money, count) {
   let acc = 0;
    let result = 0;
    
    for (let i = 1; i<= count; i++) {
        acc = acc + price * i
    }
    
    result = money - acc > 0 ? 0 : acc - money;
    
    return result
    
    
}