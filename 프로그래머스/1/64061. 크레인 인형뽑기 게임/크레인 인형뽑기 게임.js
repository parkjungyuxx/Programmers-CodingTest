function solution(board, moves) {
  const basket = [];
  let removed = 0;

  for (const move of moves) {
    const c = move - 1; 

    for (let r = 0; r < board.length; r++) {
      const doll = board[r][c];
      if (doll !== 0) {
        board[r][c] = 0;

        if (basket.length > 0 && basket[basket.length - 1] === doll) {
          basket.pop();
          removed += 2;
        } else {
          basket.push(doll);
        }
        break; 
      }
    }
  }

  return removed;
}