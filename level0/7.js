// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

let solution = (num1,num2) => (parseInt((num1/num2)*1000));

// function solution(num1, num2) {
//     return Math.trunc(num1 / num2 * 1000);
// }

// math.floor는 내림이지만 trunc는 소숫점을 버리는것 경우에 따라 맞게 쓰자.