// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

const solution = (my_string, n) => my_string.split("").map(x => x.repeat(n)).join("")

//문자열 반복은 repeat