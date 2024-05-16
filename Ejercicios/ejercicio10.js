function takeWhile(array, callback) {
  // Encuentra el índice del primer elemento que no cumple la condición
  const takeIndex = array.findIndex(element => !callback(element));

  // Retorna un nuevo array con los elementos hasta el índice encontrado
  return takeIndex === -1 ? array.slice() : array.slice(0, takeIndex);
}

// Ejemplo de uso:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = takeWhile(array, element => element < 5);
console.log(result); // Output esperado: [1, 2, 3, 4]
