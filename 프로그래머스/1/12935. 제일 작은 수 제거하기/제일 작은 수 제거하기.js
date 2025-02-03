function solution(arr) {
    if (arr.length === 0) return [-1]
    
    const minNum = Math.min(...arr)
    arr = arr.filter((el)=>el !== minNum)
    if (arr.length === 0) return [-1]
    
    return arr
    
    


}