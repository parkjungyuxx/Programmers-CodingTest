function solution(babbling) {
    const possibleSound = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    babbling.forEach((word) => {
        let previous = '';
        let isValid = true;
        
        while (word.length > 0 && isValid) {
            let found  = false;
            
            for (let sound of possibleSound) {
                if (word.startsWith(sound) && sound !== previous) {
                    word = word.slice(sound.length);
                    previous = sound;
                    found = true;
                    break;
                }
            }
            if (!found) {
                isValid = false;
            }
        }
        if (isValid && word.length === 0) result ++;
        
    });
    return result;
}