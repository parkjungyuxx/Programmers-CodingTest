function solution(numbers) {
  const n = numbers.length;
  const ans = Array(n).fill(-1);
  const stack = []; 

  for (let i = n - 1; i >= 0; i--) {
    const cur = numbers[i];

    while (stack.length && stack[stack.length - 1] <= cur) {
      stack.pop();
    }

    if (stack.length) ans[i] = stack[stack.length - 1];

    stack.push(cur);
  }
  return ans;
}
