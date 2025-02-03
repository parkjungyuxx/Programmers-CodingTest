function solution(x) {
    var answer = true;
    let sum = x.toString().split("").reduce((acc,num) => parseInt(acc)+parseInt(num))
    
    if (x % sum === 0) return true
    else return false
}