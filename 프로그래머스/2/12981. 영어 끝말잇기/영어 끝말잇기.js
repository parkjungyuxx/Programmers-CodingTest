function solution(n, words) {
    const usedWords = new Set();
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const prevWord = words[i-1]
        
        if (i > 0 && word[0] !== prevWord[prevWord.length-1]) {
            return [(i % n)+1, Math.floor(i/n)+1]
        }
        
        if (usedWords.has(word)) {
            return [(i % n)+1, Math.floor(i/n)+1]
        }
        
        usedWords.add(word)
    }
    return [0, 0]
}