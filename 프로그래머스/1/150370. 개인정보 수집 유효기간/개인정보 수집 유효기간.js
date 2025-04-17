function solution(today, terms, privacies) {
  
    today = today.split(".").map(Number)
    
    const termsMap = new Map()
    terms.forEach((term) => {
        const [key, value] = term.split(" ")
        termsMap.set(key, Number(value))
    })
    
    const result = []
    privacies.map((el,index) => {
        const [date, type] = el.split(" ");
        let [year, month, day] = date.split(".").map(Number);
        
        month += termsMap.get(type)
        while (month > 12) {
            year++;
            month -= 12
        }
        if (today[0] > year) result.push(index+1)
        else if (today[0] === year && today[1] > month) result.push(index+1)
        else if (today[0] === year && today[1] === month && today[2] >= day) result.push(index+1)
        
    });
    
    return result
}