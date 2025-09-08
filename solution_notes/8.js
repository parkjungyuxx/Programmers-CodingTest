// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 
// 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

function solution(angle) {
    if (angle > 0 && angle < 90) {
        return 1;
    } else if (angle === 90) {
        return 2;
    } else if (angle > 90 && angle < 180) {
        return 3;
    } else {
        return 4;
    }
}


// function solution(angle) {
//     return [0, 90, 91, 180].filter(x => angle>=x).length;
// }

// ex) angle(50) 이면 50>=0, 50>=90, 50>=91, 50>=180을 필터링하고 조건에 부합한 값을 boolean값으로 반환하고 boolean값의 갯수를 .length를 통해 반환된 boolean 값의 
// 개수를 계산
// 겉멋 코딩같음