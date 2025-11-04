function solution(survey, choices) {
  const score = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };
  for (let i = 0; i < survey.length; i++) {
    const [left, right] = survey[i].split("");
    const diff = choices[i] - 4; 
    if (diff < 0) score[left] += -diff;   
    else if (diff > 0) score[right] += diff; 
  }

  const pairs = ["RT", "CF", "JM", "AN"];
  let result = "";
  for (const p of pairs) {
    const [a, b] = p.split("");
    result += (score[a] >= score[b]) ? a : b; 
  }
  return result;
}
