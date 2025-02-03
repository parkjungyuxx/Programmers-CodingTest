function solution(numbers) {
   const numList = [1,2,3,4,5,6,7,8,9,0]
   
   let result = numList.filter((el)=> !numbers.includes(el))
   
   return result.reduce((acc, num)=> acc+num )
}