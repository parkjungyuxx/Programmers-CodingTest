function solution(myString) {
    const result = []
    return myString.split("x").map((el)=> el.length)
}