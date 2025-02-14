function solution(arr, n) {
    const lengthOfArr = arr.length
    const result = []
    
    for (let i = 0; i < lengthOfArr; i++) {
        if (lengthOfArr % 2 !== 0) {
            if (i % 2 === 0) result.push(arr[i]+n)
            else result.push(arr[i])
        }
        else {
            if (i % 2 !== 0) result.push(arr[i]+n)
            else result.push(arr[i])
        }
    }
    return result
}