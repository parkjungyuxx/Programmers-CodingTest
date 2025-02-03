function solution(phone_number) {
    let maskingPart = "*".repeat(phone_number.length-4)
    let backNum = phone_number.slice(-4)
    
    return maskingPart+backNum
    
}