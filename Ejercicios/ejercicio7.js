function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];

const found = find(numbers, (element) => element > 3);

console.log(found); // Output: 4
