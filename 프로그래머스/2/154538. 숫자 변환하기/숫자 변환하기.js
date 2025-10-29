function solution(x, y, n) {
  if (x === y) return 0;
  if (x > y) return -1;           

  const max = y;
  const dist = Array(max + 1).fill(-1);

  const q = new Array(max + 1);
  let head = 0, tail = 0;

  q[tail++] = x;
  dist[x] = 0;

  while (head < tail) {
    const cur = q[head++];
    const nexts = [cur + n, cur * 2, cur * 3];

    for (const nx of nexts) {
      if (nx > max) continue;     
      if (dist[nx] !== -1) continue;

      dist[nx] = dist[cur] + 1;
      if (nx === y) return dist[nx];
      q[tail++] = nx;
    }
  }
  return -1;                       
}