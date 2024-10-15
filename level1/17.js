// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 
// 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.



function solution(n) {
    let pieceOfPizza = 7;
    let numberOfPizza = 1;
    
    while ((pieceOfPizza * numberOfPizza) < n) numberOfPizza++
    return numberOfPizza;
}

// function solution(n) {
//     return Math.ceil(n / 7)
// }

// 모두가 최소 1조각 먹을 수 있는 값을 리턴하는것이므로 math.ceil을 통해서 올림을 통해서 피자 판수 return.. 