function solution(my_str, n) {
    const arr = []
    for (let i = 0; i < my_str.length; i+=n) {
        arr.push(my_str.slice(i, i+n))
    }
    return arr
}