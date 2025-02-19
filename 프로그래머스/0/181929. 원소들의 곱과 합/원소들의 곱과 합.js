function solution(num_list) {
    const sum = num_list.reduce((acc,num) => acc+num,0)
    const multiply = num_list.reduce((acc,num) => acc*num,1)

    if (multiply < (sum**2)) return 1
    else return 0
}