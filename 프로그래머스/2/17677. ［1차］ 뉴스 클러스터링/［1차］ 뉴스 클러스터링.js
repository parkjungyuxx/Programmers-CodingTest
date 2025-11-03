function solution(str1, str2) {
  const a = toBigrams(str1);
  const b = toBigrams(str2);

  const keys = new Set([...a.keys(), ...b.keys()]);
  let inter = 0, uni = 0;

  for (const k of keys) {
    const ca = a.get(k) || 0;
    const cb = b.get(k) || 0;
    inter += Math.min(ca, cb);
    uni   += Math.max(ca, cb);
  }

  if (uni === 0) return 65536;              
  return Math.floor((inter / uni) * 65536);
}

function toBigrams(s) {
  const m = new Map();
  s = s.toLowerCase();
  for (let i = 0; i < s.length - 1; i++) {
    const pair = s[i] + s[i + 1];
    if (/^[a-z]{2}$/.test(pair)) {
      m.set(pair, (m.get(pair) || 0) + 1);
    }
  }
  return m;
}
