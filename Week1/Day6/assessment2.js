const numbers = [1, 2, 3, 4];

const result = numbers.reduce((total, number) => {
  return total + number;
}, 0);

console.log(result);