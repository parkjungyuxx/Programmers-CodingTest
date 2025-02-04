function solution(A,B){
    
    let result = 0
    
    A = A.sort((a,b)=> b-a)
    B = B.sort((a,b)=> a-b)
    
    for (let i = 0; i<A.length; i++) {
        result += A[i]*B[i]
        
    }
    return result
}