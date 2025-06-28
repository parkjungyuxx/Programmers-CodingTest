function solution(keymap, targets) {
    const keyMin = {};
    
    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const ch = key[i]
            const pressCount = i + 1;
            
            if (!keyMin[ch] || pressCount < keyMin[ch]) {
                keyMin[ch] = pressCount;
            }
        }
    }
    
    const result = targets.map((target) => {
        let sum = 0;
        for (const ch of target) {
            if (!keyMin[ch]) return -1;
            sum += keyMin[ch]
        } return sum;
    })
    return result;
}