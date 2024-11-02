// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

let solution = (my_string) => {
    let result = "";
    for (let i = 0; i <= my_string.length -1; i++) {
        if (my_string[i] == my_string[i].toUpperCase()) {
            result += my_string[i].toLowerCase();
            
        } else {
            result += my_string[i].toUpperCase();
        } 
    } return result;
}

//toUpperCase, toLowerCase 기억 그리고 문자열에 추가할땐 + 연산자 사용

// function solution(my_string) {
//     var answer = '';
//     for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
//     return answer;
// }