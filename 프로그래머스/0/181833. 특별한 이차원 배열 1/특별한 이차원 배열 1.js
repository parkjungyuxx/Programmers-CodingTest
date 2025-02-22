function solution(n) {
    const list = []
    for (let i = 0; i < n; i++) {
        const list2 =[]
        for (let j = 0; j < n; j++) {
            if (i === j) list2.push(1)
            else list2.push(0)
        }
        list.push(list2)

    }
    return list
}