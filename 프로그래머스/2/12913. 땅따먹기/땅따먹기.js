function solution(land) {
    const n = land.length;
    for (let r = 1; r < n; r++) {
        const a = land[r - 1][0], b = land[r - 1][1], c = land[r - 1][2], d = land[r - 1][3];
        land[r][0] += Math.max(b, c, d);
        land[r][1] += Math.max(a, c, d);
        land[r][2] += Math.max(a, b, d);
        land[r][3] += Math.max(a, b, c);
    }
    return Math.max(...land[n - 1]);
}