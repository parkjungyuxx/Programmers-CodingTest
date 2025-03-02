function solution(my_string, s, e) {
    const frontStr = my_string.split("").slice(0,s).join("");
    const centerStr = my_string.split("").slice(s, e+1).reverse().join("");
    const lastStr = my_string.split("").slice(e+1).join("")
    
    return frontStr+centerStr+lastStr
}