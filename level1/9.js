// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution (n) {
    let sum = 0;
    if (n <= 1000 && n > 0) {
        if(n % 2 === 0) {
            for (let i = n; i > 0; i-=2)
                sum += i;
        } else {
            for (let i = n-1; i >0; i-=2)
                sum += i;
        } return sum;
    } else {
        console.log("잘못된 숫자")
    }
}


// function solution(n) {
//     var answer = 0;

//     for(let i=2 ; i<=n ; i+=2)
//         answer += i;

//     return answer;
// }

// 0이상 짝수 더하기니깐 2부터 시작해서 증감식으로 n보다 작을때 까지.. 나보다 훨씬 좋은 코드 .. 생각 더 하고 코드 치기


