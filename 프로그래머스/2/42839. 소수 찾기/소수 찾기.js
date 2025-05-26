function solution(numbers) {
  function makeNumberList(arr, count) {
    const final = [];

    if (count === 1) {
      for (let i = 0; i < arr.length; i++) {
        final.push([arr[i]]);
      }
      return final;
    }

    for (let i = 0; i < arr.length; i++) {
      const picked = arr[i];
      const left = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const small = makeNumberList(left, count - 1);

      for (let j = 0; j < small.length; j++) {
        final.push([picked, ...small[j]]);
      }
    }

    return final;
  }

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const nums = numbers.split('');
  const made = {};

  for (let i = 1; i <= nums.length; i++) {
    const parts = makeNumberList(nums, i);
    for (let j = 0; j < parts.length; j++) {
      const joined = Number(parts[j].join(''));
      made[joined] = true;
    }
  }

  let answer = 0;
  for (let key in made) {
    const n = Number(key);
    if (isPrime(n)) answer++;
  }

  return answer;
}
