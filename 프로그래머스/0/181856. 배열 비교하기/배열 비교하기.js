function solution(arr1, arr2) {
    if (arr1.length - arr2.length < 0) return -1
    if (arr1.length - arr2.length > 0) return 1
    if (arr1.length === arr2.length) {
        const sumOfArr1 = arr1.reduce((acc,num) => acc+num,0)
        const sumOfArr2 = arr2.reduce((acc,num) => acc+num,0)
        
        if (sumOfArr1 > sumOfArr2) return 1
        if (sumOfArr1 < sumOfArr2) return -1
        if (sumOfArr1 === sumOfArr2) return 0
        
        
        
    } 
    
}