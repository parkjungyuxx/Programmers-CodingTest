// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

let arr = [];

function solution(numbers) {
  for (let i = 0; i <= numbers.length - 1; i++) {
    arr.push(numbers[i] * 2);
  }
  return arr;
}

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

// reduce는 배열의 모든 요소를 순회하면서, 하나의 값으로 축약해주는 메서드. 일반적으로 배열의 누적값 계산할 때 사용됨
// ...는 배열이나 객체에서 요소를 개별 요소로 분해하여 다른 배열이나 객체에 추가하거나, 기존 배열을 복사할 때 사용.
// ...을 사용하지 않은 버전 만들어봄

// function solution(numbers) {
//   return numbers.reduce((a, b) => {
//     a.push(b * 2);
//     return a;
//   }, []);
// }

//콜백함수? 아 어렵다~