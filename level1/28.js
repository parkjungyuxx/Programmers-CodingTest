// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

let solution = (numbers) => {
    let sum = 0;
    for (let i = 0; i <= numbers.length -1; i++) {
        sum += numbers[i];
    }
    let avg = sum / (numbers.length);
    return avg
}

// function solution(numbers) {
//     var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
//     return answer;
// }

// reduce 함수로 a 에 누적합 축적