function solution(arr) {
    let count = 0;
    let prevArr = [...arr];
    
    while (true) {
        const newArr = prevArr.map((el) => {
        if (el >= 50 && el % 2 === 0) return el / 2
        if (el < 50 && el % 2 === 1) return el * 2 + 1
        else return el
        })
        if (prevArr.toString() === newArr.toString()) return count
        
        prevArr = newArr
        count++
    }
}