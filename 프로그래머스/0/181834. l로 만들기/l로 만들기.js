function solution(myString) {
    return myString.split("").map((el) => {
        if (el < "l") return "l"
        else return el
    }).join("")
}