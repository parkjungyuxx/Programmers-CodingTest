function solution(wallpaper) {
  const R = wallpaper.length;
  const C = wallpaper[0].length;

  let minR = R, minC = C;
  let maxR = -1, maxC = -1;

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (wallpaper[r][c] === '#') {
        if (r < minR) minR = r;
        if (c < minC) minC = c;
        if (r > maxR) maxR = r;
        if (c > maxC) maxC = c;
      }
    }
  }

  return [minR, minC, maxR + 1, maxC + 1];
}
