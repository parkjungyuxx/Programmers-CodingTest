function solution(myString) {
    return myString.split("").map((el) => {
        if (el === "a") return "A"
        if (el === "A") return "A"
        else return el.toLowerCase()
    }).join("")
}