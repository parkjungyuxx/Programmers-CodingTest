

function solution(record) {
    const obj = {}
    for (const user of record) {
        const [action, id, nickName] = user.split(" ")
        if (action !== "Leave") {
            obj[id] = nickName    
        }
        
    }
    const result = []
    
    for (const line of record) {
        const [action, id, nickName] = line.split(" ")
        if (action === "Enter") {
            result.push(obj[id]+"님이 들어왔습니다.")
        } else if (action === "Leave") {
            result.push(obj[id]+"님이 나갔습니다.")
        }
    }
    return result
}