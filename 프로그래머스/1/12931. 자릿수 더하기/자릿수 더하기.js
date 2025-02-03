function solution(n)
{
    const result = n.toString().split("").reduce((acc,num)=>parseInt(acc)+parseInt(num),0)

    
    return result
    
    
}