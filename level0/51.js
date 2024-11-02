// 쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

const solution = n => {
    if (n === 6) return n/6;
    
    let maxNum = Math.max(n, 6);
    while (true) {
        if (maxNum % n === 0 && maxNum % 6 ===0){
            return maxNum/6;
        }
        maxNum++;
    }
    return maxNum/6;
}

// const solution = (n) => {
//     let piece = 6

//     while(true) {
//         if (piece % n === 0) {
//             break
//         }
//         piece += 6
//     }

//     return piece / 6
// }

// 피자 조각을 6부터 시작해서 6씩 더해서 n을 나눴을때 나누어 떨어질때 Break