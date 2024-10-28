// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

const solution = my_string => {
    const arr = my_string.replace(/[^0-9]/g,"");
    const result = arr.split("").map(Number);
   return result.sort();
}


//정규 표현식 [/^0-9]/g,""] 숫자 제외 문자들을 replace 해서 숫자만 반환 map(number)하면 숫자만 반환