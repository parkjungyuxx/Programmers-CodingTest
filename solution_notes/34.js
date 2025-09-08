// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

let solution = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if(n % i === 0)
            arr.push(n/i)
    }
    arr.sort((a,b) => a-b);
    return arr;
}

// function solution(n) {
//     return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
// }