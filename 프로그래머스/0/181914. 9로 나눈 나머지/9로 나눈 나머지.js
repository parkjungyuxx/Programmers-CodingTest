function solution(number) {
    return number.split("").reduce((acc, num) => acc+Number(num),0) % 9
}