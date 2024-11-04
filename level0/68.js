// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

const solution = my_string => {
    if (!my_string.match(/[0-9]/g)) return 0;
    const arr =my_string.match(/[0-9]+/ig);
    const result = arr.reduce((acc,num) => acc+ Number(num), 0)
    return result;
}

