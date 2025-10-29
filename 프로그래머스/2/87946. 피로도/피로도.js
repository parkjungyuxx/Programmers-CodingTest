function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = Array(n).fill(false);
  let best = 0;

  function dfs(energy, count) {
    best = Math.max(best, count);

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      const [need, cost] = dungeons[i];

      if (energy >= need) {
        visited[i] = true;
        dfs(energy - cost, count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return best;
}
