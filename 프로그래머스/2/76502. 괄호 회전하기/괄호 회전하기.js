function solution(s) {
  let count = 0;

  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  function isValid(str) {
    const stack = [];
    for (let ch of str) {
      if (ch === '(' || ch === '[' || ch === '{') {
        stack.push(ch);
      } else {
        if (stack.pop() !== pairs[ch]) return false;
      }
    }
    return stack.length === 0;
  }

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) count++;
  }

  return count;
}