function solution(want, number, discount) {
    let answer = 0;

    for (let i = 0; i <= discount.length - 10; i++) {
        const window = discount.slice(i, i + 10);
        const map = new Map();

        for (let item of window) {
            map.set(item, (map.get(item) || 0) + 1);
        }

        let isMatch = true;
        for (let j = 0; j < want.length; j++) {
            if (map.get(want[j]) !== number[j]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) answer++;
    }

    return answer;
}