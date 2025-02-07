function solution(brown, yellow) {
    const total = brown + yellow
    
    for (let heigth = 3; heigth <= Math.sqrt(total); heigth++) {
        if (total % heigth === 0) {
            let width = total / heigth 
            
            if ((width-2) * (heigth-2) === yellow) {
                return [width,heigth]
            }
        }
    }
}