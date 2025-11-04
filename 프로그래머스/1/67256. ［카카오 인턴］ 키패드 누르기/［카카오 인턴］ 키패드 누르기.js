function solution(numbers, hand) {
  const pos = {
    1:[0,0], 2:[0,1], 3:[0,2],
    4:[1,0], 5:[1,1], 6:[1,2],
    7:[2,0], 8:[2,1], 9:[2,2],
    '*':[3,0], 0:[3,1], '#':[3,2]
  };

  let L = pos['*'];
  let R = pos['#'];

  const isLeftCol  = new Set([1,4,7]);
  const isRightCol = new Set([3,6,9]);
  const preferRight = hand === 'right';

  let answer = '';

  for (const n of numbers) {
    if (isLeftCol.has(n)) {
      answer += 'L';
      L = pos[n];
    } else if (isRightCol.has(n)) {
      answer += 'R';
      R = pos[n];
    } else {
      const [lr, lc] = L, [rr, rc] = R, [tr, tc] = pos[n];
      const dL = Math.abs(lr - tr) + Math.abs(lc - tc);
      const dR = Math.abs(rr - tr) + Math.abs(rc - tc);

      if (dL < dR || (dL === dR && !preferRight)) {
        answer += 'L';
        L = pos[n];
      } else {
        answer += 'R';
        R = pos[n];
      }
    }
  }
  return answer;
}
