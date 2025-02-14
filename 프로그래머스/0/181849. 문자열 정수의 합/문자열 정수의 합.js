function solution(num_str) {
    return num_str.split("").reduce((acc, num) => parseInt(acc)+parseInt(num),0)
}