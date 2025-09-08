// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

const solution = my_string => {
    const arr1 = my_string.split("")
    const arr2 = [];
    arr1.forEach((el) => {
        if(!arr2.includes(el)) {
            arr2.push(el)
        }
    } ) 
    return arr2.join("")
}


// function solution(my_string) {
//     return [...new Set(my_string)].join('');
// } 
// Set은 입력된 문자열의 각 문자를 고유하게 저장하기 때문에 중복 문자는 자동을 제거됨
// Set은 문자열 뿐만 아니라 모든 데이터 타입에서 사용 가능