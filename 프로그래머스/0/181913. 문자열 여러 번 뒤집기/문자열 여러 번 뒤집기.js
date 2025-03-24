function solution(my_string, queries) {
    let strArr = my_string.split("")
    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];
        const reversed = strArr.slice(start,end+1).reverse();
        strArr.splice(start, end+1-start, ...reversed)
       
    
    }
    return strArr.join("")
}