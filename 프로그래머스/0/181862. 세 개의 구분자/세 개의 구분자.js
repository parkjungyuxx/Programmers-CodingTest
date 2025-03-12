function solution(myStr) {
    
    const result = myStr.split(/[abc]/).filter((el) => el !== "")
    
    if (result.length === 0) return ["EMPTY"]
    else return result
}