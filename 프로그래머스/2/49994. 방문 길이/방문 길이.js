const isValidMove = (x,y) => {
    return x >= -5 && x <= 5 && y >= -5 && y <= 5
}

const moveLocation = (x,y, dir) => {
    switch (dir) {
        case "U" :
            return [x, y+1]
        case "D" :
            return [x, y-1]
        case "R" :
            return [x+1, y]
        case "L" :
            return [x-1, y]
    }
}

const edgeCase = (x,y,nx,ny) => {
    if (x < nx || (x === nx && y <= ny)) {
    return `${x},${y}-${nx},${ny}`;
  }
    return `${nx},${ny}-${x},${y}`
}

const solution = (dirs) => {
    let x = 0
    let y = 0
    
    const result = new Set()
    
    for (const dir of dirs) {
        const [nx, ny] = moveLocation(x,y,dir)
        
        if (!isValidMove(nx, ny)) {
            continue
        }
        
        result.add(edgeCase(x,y,nx,ny))
        
        
        x = nx; y = ny
        
        
        
    }
    return result.size
}