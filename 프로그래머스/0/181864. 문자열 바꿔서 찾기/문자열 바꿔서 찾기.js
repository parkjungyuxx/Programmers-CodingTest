function solution(myString, pat) {
    return myString.split("").map((el) => {
        if (el === "A") return "B"
        else return "A"
    }).join("").includes(pat) ?  1 :  0
    
}