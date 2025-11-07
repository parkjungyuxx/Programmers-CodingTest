function solution(players, callings) {
  const pos = new Map();
  players.forEach((name, i) => pos.set(name, i));

  for (const name of callings) {
    const i = pos.get(name);   
    if (i === 0) continue;     

    const frontName = players[i - 1]; 

    [players[i - 1], players[i]] = [players[i], players[i - 1]];

    pos.set(name, i - 1);
    pos.set(frontName, i);
  }

  return players;
}
