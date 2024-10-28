// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
//  머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

const solution = order => {
    orderArr = order.toString().split("");
    const filterdArr = orderArr.filter(x => x == 3 || x == 6 || x == 9);
    return filterdArr.length;
    
    
}

// function solution(order) {
//     var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
//     return answer;
// }

//matchAll() 메서드는 정규식에 따라 문자열에서 일치하는 모든 결과를 반복 가능한(iterable) 객체로 반환