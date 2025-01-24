function solution(name, yearning, photo) {

  const yearningMap = name.reduce((acc, curr, idx) => {
    acc[curr] = yearning[idx];
    return acc;
  }, {});

  return photo.map((group) =>
    group.reduce((acc, person) => acc + (yearningMap[person] || 0), 0)
  );
}
