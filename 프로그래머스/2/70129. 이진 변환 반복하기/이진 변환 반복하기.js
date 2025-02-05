function solution(s) {
    let count = 0
    let numberOfZero = 0

    while (s !== "1") {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "0") numberOfZero++
        }
        s = s.split("0").join("").length.toString(2)
        count++
        
    }
    
    return [count, numberOfZero]
}