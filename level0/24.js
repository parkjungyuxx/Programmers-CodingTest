// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

let solution = (n, numlist) => {
    let arr = [];
    for (let i = 0; i <= numlist.length -1; i++) {
        if(numlist[i] % n === 0) {
            arr.push(numlist[i])
        }
    } return arr;
}


// function solution(n, numlist) {
//     return numlist.filter(num => num % n === 0);
// }

//기억하자 filter 는 배열을 새로 생성하는것 조건식에 부합하는 놈들을