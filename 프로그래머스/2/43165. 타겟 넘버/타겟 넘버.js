function solution(numbers, target) {
  let count = 0;
  const n = numbers.length;

  function dfs(index, sum) {
    if (index === n) {
      if (sum === target) count += 1;
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);
  return count;
}