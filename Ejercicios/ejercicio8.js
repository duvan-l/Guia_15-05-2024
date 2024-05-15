function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return undefined;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];

const evenIndex = findIndex(numbers, (element) => element % 2 === 0);
console.log(evenIndex); // Output: 1 (el índice del primer número par)

const greaterThanThreeIndex = findIndex(numbers, (element) => element > 3);
console.log(greaterThanThreeIndex); // Output: 3 (el índice del primer número mayor que 3)

const negativeIndex = findIndex(numbers, (element) => element < 0);
console.log(negativeIndex); // Output: undefined (ningún número es negativo)
