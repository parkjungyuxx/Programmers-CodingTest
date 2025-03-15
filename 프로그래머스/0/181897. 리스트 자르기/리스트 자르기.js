function solution(n, slicer, num_list) {
    const result = []
    switch (n) {
        case 1: result.push(num_list.slice(0,slicer[1]+1));
            break;
        case 2: result.push(num_list.slice(slicer[0]));
            break;
        case 3: result.push(num_list.slice(slicer[0],slicer[1]+1));
            break;
        case 4: for (let i =slicer[0]; i <= slicer[1]; i+=slicer[2]) {
            result.push(num_list[i])
        }
            
    }
    return result.flat()
}