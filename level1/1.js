// 내 풀이
function solution(age) {
    let answer = 0;
    answer = 2022 - age + 1;
    return answer;

}

let birthYearOfTeacher = solution(23);
console.log(`선생님의 나이는 ${birthYearOfTeacher}년 입니다.`)

// 다른 사람 풀이
// function solution(age) {
//     return new Date().getFullYear() - age + 1;
// }

// getFullYear는 현재 연도를 가져오는 함수 그래서 2022년에 사용하면 좋은 코드지만 현재 2024년에는 사용 불가
// new Date 를 사용하면 현재 시점의 날짜나 시간이 담긴 객체를 생성, getFullYear는 현재 연도를 가져오는 매서드