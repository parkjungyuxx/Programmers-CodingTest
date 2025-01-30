function solution(s, n) {
    var answer = '';
    
    const lower = "abcdefghijklmnopqrstuvwxyz"; 
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    return s = s.split("").map((el, i) => {
        if (el === " ") return " "
        const alphabet = lower.includes(el) ? lower : upper;
        const index = alphabet.indexOf(el);
        const newIndex = (index + n) % 26;
        
        return alphabet[newIndex]
    }).join("")
}