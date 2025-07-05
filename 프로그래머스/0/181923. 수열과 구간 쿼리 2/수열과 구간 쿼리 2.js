function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const candidates = arr.slice(s, e + 1).filter(num => num > k);
        return candidates.length > 0 ? Math.min(...candidates) : -1;
    });
}