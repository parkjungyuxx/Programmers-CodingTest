function solution(number, limit, power) {
    const divisorCounts = [];

    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++; 
                if (j !== i / j) count++; 
            }
        }
        divisorCounts.push(count);
    }

    const totalPower = divisorCounts
        .map(count => (count > limit ? power : count))
        .reduce((acc, cur) => acc + cur, 0);

    return totalPower;
}
