function solution(t, p) {
    let count = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        const subString = t.substring(i, i+ p.length)
        if (parseInt(subString) <= parseInt(p)) count ++
        
    }
    
    return count

}