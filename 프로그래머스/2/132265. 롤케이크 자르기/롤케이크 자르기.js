function solution(topping) {
  const n = topping.length;
  const right = new Map();
  for (const t of topping) {
    right.set(t, (right.get(t) || 0) + 1);
  }
  let rightKinds = right.size;

  const left = new Set();
  let answer = 0;

  for (let i = 0; i < n - 1; i++) {
    const t = topping[i];

    left.add(t);

    right.set(t, right.get(t) - 1);
    if (right.get(t) === 0) {
      right.delete(t);
      rightKinds--;
    }

    if (left.size === rightKinds) answer++;
  }

  return answer;
}
