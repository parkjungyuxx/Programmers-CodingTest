function solution(s) {
    const numWords = ["zero","one","two","three","four","five","six","seven","eight","nine"]

    numWords.forEach((word, index) => {
        s = s.replace(new RegExp(word,"g"), index)
    })

    return parseInt(s);
}