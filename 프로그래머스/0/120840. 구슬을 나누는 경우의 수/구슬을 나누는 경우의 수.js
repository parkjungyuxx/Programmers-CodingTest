function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
  balls = BigInt(balls);
  share = BigInt(share);

  return Number(
    factorial(balls) /
    (factorial(share) * factorial(balls - share))
  );
}
