function solution(q, r, code) {
    const arr = []
    const newCode = code.split("").filter((el,index) => {
        if (index % q === r) return el
    })
   
    return newCode.join("")
}