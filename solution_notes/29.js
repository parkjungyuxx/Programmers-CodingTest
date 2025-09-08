// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

let solution = (num_list) => {
    let evenArr = [];
    let oddArr = [];
    for (let i = 0; i <= num_list.length - 1; i++) {
        if (num_list[i] % 2 === 0) {
            evenArr.push(num_list[i])
        } else {
            oddArr.push(num_list[i])
        }
    }
    let numberOfEvenOdd = [evenArr.length, oddArr.length]
    return numberOfEvenOdd;
    
}


// function solution(num_list) {
//     var answer = [0,0];

//     for(let a of num_list){
//         answer[a%2] += 1
//     }

//     return answer;
// }