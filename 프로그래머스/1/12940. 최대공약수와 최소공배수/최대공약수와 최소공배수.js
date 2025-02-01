function solution(n, m) {
    const maxNum = Math.max(n,m);
    const minNum = Math.min(n,m)
   
    const getGcd = (maxNum, minNum) => {
        return minNum === 0 ? maxNum : getGcd(minNum, maxNum % minNum)
    }
    
    const getLcm = (maxNum, minNum) => {
        return maxNum * minNum / getGcd(maxNum, minNum)
    }
    
    return [getGcd(maxNum, minNum), getLcm(maxNum, minNum)]
}