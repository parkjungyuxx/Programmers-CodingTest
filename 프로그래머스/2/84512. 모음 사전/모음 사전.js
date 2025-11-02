function solution(word) {
  const order = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const weights = [781, 156, 31, 6, 1]; 
  let ans = word.length;                

  for (let i = 0; i < word.length; i++) {
    ans += order[word[i]] * weights[i];
  }
  return ans;
}