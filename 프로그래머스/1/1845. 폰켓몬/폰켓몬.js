function solution(nums) {
    const answer = new Set(nums)
    const n = nums.length/2
    
    return Math.min(answer.size,n)
    
}