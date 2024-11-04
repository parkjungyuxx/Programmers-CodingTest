// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

const solution = s => {
    const result = [];
    const arr = s.split("");
    arr.forEach((el) => {
        if (arr.indexOf(el) === arr.lastIndexOf(el)) {
            result.push(el);
        }
    })
    return result.sort().join("")
}


// function solution(s) {
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//     return res.sort().join('');
// }

