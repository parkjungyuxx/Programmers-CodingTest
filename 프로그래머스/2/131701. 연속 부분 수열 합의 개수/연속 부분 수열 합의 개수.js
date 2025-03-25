function solution(elements) {
    const n = elements.length;
    const sumSet = new Set();

    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let i = 0; i < length; i++) {
                sum += elements[(start + i) % n]; 
            }
            sumSet.add(sum);
        }
    }

    return sumSet.size;
}