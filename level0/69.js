// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

const solution = (array, n) => {
    return array.reduce((acc, num) => {
        if (Math.abs(acc - n) === Math.abs(num - n)) {
            return acc < num ? acc : num; 
        }
        return Math.abs(acc - n) < Math.abs(num - n) ? acc : num;
    });
};


