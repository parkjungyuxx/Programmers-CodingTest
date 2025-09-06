function solution(want, number, discount) {
  let answer = 0;

  // 필요 개수 맵
  const need = {};
  for (let i = 0; i < want.length; i++) {
    need[want[i]] = number[i];
  }

  // 시작 인덱스는 0 ~ (len - 10)
  for (let i = 0; i <= discount.length - 10; i++) {
    // 윈도우마다 새 카운터 복제
    const cnt = { ...need };

    // 10일치 깎기
    for (let j = i; j < i + 10; j++) {
      const item = discount[j];
      if (cnt[item] !== undefined) cnt[item]--;
    }

    // 모두 0 이하인지 확인
    let ok = true;
    for (const k in cnt) {
      if (cnt[k] > 0) { ok = false; break; }
    }
    if (ok) answer++;
  }

  return answer;
}
