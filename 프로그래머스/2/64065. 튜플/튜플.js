function solution(s) {
  const parts = s.slice(2, -2).split("},{");

  const sets = parts.map(part => part.split(",").map(Number));

  sets.sort((a, b) => a.length - b.length);

  const seen = new Set();
  const result = [];
  for (const arr of sets) {
    for (const x of arr) {
      if (!seen.has(x)) {
        seen.add(x);
        result.push(x);
      }
    }
  }
  return result;
}
