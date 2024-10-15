// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

let arr = [];

function solution(num_list) {
    for (let i = num_list.length - 1; i >= 0; i--) {
        arr.push(num_list[i]); 
    }
    return arr;
}


// function solution(num_list) {
//     return num_list.reverse()
// }

// .reverse 함수는 배열 자체를 역순으로 뒤집어줌 주의할점은 배열의 값이 바뀐다는점