function solution(genres, plays) {
    const obj = {}
    
    
    for (let i = 0; i < genres.length; i++) {
        if (obj[genres[i]]) {
            obj[genres[i]].push([plays[i], i])
        } else if (!obj[genres[i]]) {
            obj[genres[i]] = [[plays[i], i]]
        }
    }
    
    for (const genre in obj) {
        const sum = obj[genre].reduce((a,b) => a + b[0],0)
        obj[genre] = obj[genre].sort((a,b) => b[0] - a[0]).map((el) => {
            return [...el, sum]
        }).slice(0,2)
        
        
    }
   const result = []
   
   const values = Object.values(obj).flat().sort((a,b) => b[2] - a[2]).map((el) => el[1]) 
   return values
} 