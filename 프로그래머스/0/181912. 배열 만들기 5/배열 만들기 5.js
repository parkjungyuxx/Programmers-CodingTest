function solution(intStrs, k, s, l) {
    return intStrs.map((el) => parseInt(el.slice(s, s+l))).filter((el) => el > k)
}