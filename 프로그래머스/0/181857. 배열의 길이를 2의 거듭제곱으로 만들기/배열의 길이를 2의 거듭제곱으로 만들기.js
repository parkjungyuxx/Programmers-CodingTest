function solution(arr) {
    let length = arr.length;
    let targetLength = 1;

    while (targetLength < length) {
        targetLength *= 2;
    }
    if (Math.sqrt(arr) % 2 !== 0) {
        return [...arr, ...Array(targetLength - length).fill(0)]
    }
}