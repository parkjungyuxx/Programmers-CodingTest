function solution(a, d, included) {
    const arr1 = [];
    const arr2 = [];
    let num = a
    for (let i = 0; i < included.length; i++) {
        arr1.push(num)
        num +=d;
    }
    for (let j = 0; j < included.length; j++) {
            if (included[j] === true) arr2.push(j)
        }
    const result = [];
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr1[arr2[i]])
    }
    return result.reduce((acc,num) => acc+num,0)
}