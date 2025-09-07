function solution(id_list, report, k) {
    // 유저 객체 만들고
    // 유저를 신고한 놈들을 값으로 할당하고 중복 불가
    // 다시 이거들을 사이즈로 매핑하고
    // 거기서 정지당한애들 추출하고
    // 그걸 이제 유저가 신고한 id for문 돌려서 includes로 포함되어있으면 answer ++해서 배열에 추가
    
    const userObj = {}
    const answerObj = {}
    
    for (let user of id_list) {
        userObj[user] = new Set()
        answerObj[user] = 0
    }
    
    const uniqueReports = new Set(report)
    
    for (let list of uniqueReports) {
        const [user, reported] = list.split(" ")
        userObj[reported].add(user)
    }
    
    const banned = new Set(id_list.filter((id) => userObj[id].size >= k))
    
    for (const list of uniqueReports) {
        const [user, reported] = list.split(" ")
        if (banned.has(reported)) {
            answerObj[user] +=1
        }
    }
    return id_list.map((id) => answerObj[id])
}