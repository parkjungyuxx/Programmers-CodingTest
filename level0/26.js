// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

let solution = (rsp) => {
    let result = "";
    for (let i = 0; i <= rsp.length -1; i++)
        if (rsp[i] == 2) {
            result += 0;
        } else if (rsp[i] == 0) {
            result += 5;
        } else if (rsp[i] == 5) {
            result += 2;
        }
    return result;
}

// function solution(rsp) {
//     let arr = {
//         2: 0,
//         0: 5,
//         5: 2
//     };
//     var answer = [...rsp].map(v => arr[v]).join("");
//     return answer;
// }

// map을 써서 배열을 순회하면서 각 값에 대해 미리 만들어놓은 객체안의 대응 관계로 대체(반환)하고 join를 사용해 문자열에 추가