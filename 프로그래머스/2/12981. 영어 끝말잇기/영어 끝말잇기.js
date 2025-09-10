function solution(n, words) {
    const usedWords = new Set()
    let prevWord = words[0][0]
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (usedWords.has(word) || word[0] !== prevWord) {
            const player = (i % n) + 1
            const turn = Math.floor(i / n) + 1
            return [player, turn]
        } else {
            usedWords.add(word)
            prevWord = word.slice(-1)
        }
    }
    return [0,0]
}