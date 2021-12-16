'use strict';
function get100Numbers() {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers.reverse();
}
function getReversed100Numbers() {
  return get100Numbers().reverse();
}
console.log(getReversed100Numbers());
