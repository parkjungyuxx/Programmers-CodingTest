function solution(my_string) {
  const result = new Array(52).fill(0);

  for (let char of my_string) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      result[code - 65]++;
    } else if (code >= 97 && code <= 122) {
      result[code - 97 + 26]++;
    }
  }

  return result;
}