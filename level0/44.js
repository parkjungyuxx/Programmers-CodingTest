// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 
//해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

const solution = (my_string, num1, num2) => {
    const arr = my_string.split("");
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    return arr.join("");
}

// 구조 분해 할당 설명 필요


