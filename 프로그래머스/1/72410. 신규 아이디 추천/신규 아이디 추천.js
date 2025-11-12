function solution(new_id) {
  let s = new_id.toLowerCase();

  s = s.replace(/[^a-z0-9-_.]/g, '');

  s = s.replace(/\.{2,}/g, '.');

  s = s.replace(/^\.|\.$/g, '');

  if (s.length === 0) s = 'a';

  if (s.length >= 16) s = s.slice(0, 15);
  s = s.replace(/\.$/, '');

  while (s.length < 3) s += s[s.length - 1];

  return s;
}
