function solution(num_list) {
    const lengthOfList = num_list.length
    if (lengthOfList >= 11) return num_list.reduce((acc,num)=> acc+num,0)
    else return num_list.reduce((acc,num) => acc * num,1)
}