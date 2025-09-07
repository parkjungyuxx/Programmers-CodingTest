function solution(enroll, referral, seller, amount) {
    const parent = {}
    
    for (let i = 0; i < enroll.length; i++) {
        parent[enroll[i]] = referral[i]
    }
    
    const total = {}
    
    for (let name of enroll) {
       total[name] = 0
    }
    
    for (let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100
        let currName = seller[i]
        
        while (money > 0 && (currName !== "-")) {
            total[currName] += money - Math.floor(money/10)
            currName = parent[currName]
            
            money = Math.floor(money/10)
        }
    }
    return [...Object.values(total)]
}