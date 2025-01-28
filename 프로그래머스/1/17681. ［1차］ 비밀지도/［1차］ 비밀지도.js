function solution(n, arr1, arr2) {
    const newArr1 = []
    const newArr2 = []
    const result = []
    for (let num of arr1) {
        let binaryStr = num.toString(2)
        binaryStr = binaryStr.padStart(n, "0")
        newArr1.push(binaryStr)
    }
    for (let num of arr2) {
        let binaryStr = num.toString(2)
        binaryStr = binaryStr.padStart(n, "0")
        newArr2.push(binaryStr)
    }
    
    for (let i = 0; i< n; i++) {
        const combinedRow = [];
        for (let j = 0; j < n; j++) {
            if (newArr1[i][j] === "1" || newArr2[i][j] === "1") 
                combinedRow.push("#")
            else combinedRow.push(" ")
        }
        result.push(combinedRow.join(""))
    }
    return result
}