function solution(sizes) {
    let maxWidth = 0
    let maxHeigth = 0
    
    sizes.forEach(([w,h]) => {
        const [longer, shorter] = w > h ? [w,h] : [h,w];
        maxWidth = Math.max(maxWidth, longer)
        maxHeigth = Math.max(maxHeigth, shorter)
    }) 
    return maxWidth * maxHeigth
}