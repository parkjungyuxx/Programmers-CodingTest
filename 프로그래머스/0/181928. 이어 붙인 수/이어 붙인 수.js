function solution(num_list) {
    let evenNum = "";
    let oddNum = "";
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) evenNum += num_list[i].toString()
        else oddNum += num_list[i].toString()
    }
    return Number(evenNum) + Number(oddNum)
}