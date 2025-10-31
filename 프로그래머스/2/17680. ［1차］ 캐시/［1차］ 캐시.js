function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  const cache = new Map(); 
  let time = 0;

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.has(city)) {
      time += 1;
      cache.delete(city);
      cache.set(city, true);
    } else {
      time += 5;
      if (cache.size === cacheSize) {
        const lruKey = cache.keys().next().value;
        cache.delete(lruKey);
      }
      cache.set(city, true);
    }
  }
  return time;
}
