// Map

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((item) => item * 2);
console.log(doubled);

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = arrays.flat();
console.log(flattened);

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const sliced = fruits.slice(1, 3);
console.log(sliced);

const AllNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = AllNumbers.filter((item) => item % 2 === 0);
console.log(evenNumbers);
