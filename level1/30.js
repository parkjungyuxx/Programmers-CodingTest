// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

let solution = (n, t) => {
    let result = 0;
    for (let i = 1; i<=t; i++) {
        if (i === 1) {
            result = n * 2
        } else {
            result *= 2
        }
    } return result;
}

// function solution(n, t) {
//     return n << t;
//   }

// 왼쪽 시프트 (<<) 연산자는 첫 번째 피연산자를 명시된 비트 수(32의 나머지)만큼 왼쪽으로 이동합니다. 
// 왼쪽으로 이동된 초과 비트는 폐기됩니다. 오른쪽은 움직인 비트 수 만큼 0비트로 채워집니다.