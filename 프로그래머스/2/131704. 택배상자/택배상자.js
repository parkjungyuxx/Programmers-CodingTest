function solution(order) {
  const stack = [];
  let loaded = 0;          
  const n = order.length;

  for (let box = 1; box <= n; box++) {
    stack.push(box);      

    while (stack.length && stack[stack.length - 1] === order[loaded]) {
      stack.pop();
      loaded++;
    }
  }

  while (stack.length && stack[stack.length - 1] === order[loaded]) {
    stack.pop();
    loaded++;
  }

  return loaded;
}
