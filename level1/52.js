// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
    if (direction === "right") {
        numbers.unshift(numbers.pop());
    } else if (direction === "left") {
        numbers.push(numbers.shift());
    }
    return numbers;
}

// numbers.pop 반환값 = 맨뒤의 값 unshift로 맨앞에 추가 numbers.shift반환값 맨앞 값 제거 push로 맨뒤 추가