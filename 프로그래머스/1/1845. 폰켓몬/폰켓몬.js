function solution(nums) {
    const set = new Set(nums)
    const uniqueSet = [...set]
    const num = nums.length/2
   const uniqueSetLenght = uniqueSet.length
   
   if (uniqueSetLenght > num) return num

    return uniqueSetLenght
    
}