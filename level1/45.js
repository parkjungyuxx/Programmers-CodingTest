// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

const solution = numbers => {
    let result1 = [];
    let result2 = [];
    let arr = numbers.sort((a,b) => a-b);
    if (arr[0]*arr[1] <= 0) return arr[arr.length-1]*arr[arr.length-2];
    result1.push(arr[0] * arr[1]) ;
    result2.push(arr[arr.length-1]*arr[arr.length-2]);
    const result =result1.concat(result2);
    return Math.max(...result);


}
