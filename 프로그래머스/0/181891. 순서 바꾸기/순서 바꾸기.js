function solution(num_list, n) {
    const back = num_list.slice(n)
    const front = num_list.slice(0,n)
    
    return back.concat(front)
}