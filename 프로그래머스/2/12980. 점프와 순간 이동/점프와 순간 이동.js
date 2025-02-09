function solution(n)
{
    let battery = 0
    
    while (n > 0) {
        if (n%2===1) {
            battery++
        }
        n = Math.floor(n/2)
        
    }
    return battery
}