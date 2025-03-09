function solution(strArr) {
    const lengthCount = new Map();
    
    for (let str of strArr) {
        const len = str.length;
        lengthCount.set(len, (lengthCount.get(len) || 0) +1)
    }
    
    return Math.max(...lengthCount.values())
}