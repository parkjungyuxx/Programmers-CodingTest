function solution(arr, intervals) {
    const result = [];
    for (let i = 0; i < intervals.length; i++) {
        result.push(arr.slice(intervals[i][0], intervals[i][1]+1))
    }
    return result.flat()
}