function solution(s) {
    var answer = [];
    s = s.split("")
    s.forEach((el, index) => {
        let lastIndex = s.slice(0,index).lastIndexOf(el)
        if (lastIndex !== -1) lastIndex = index - lastIndex
        answer.push(lastIndex)
    })
    return answer
}