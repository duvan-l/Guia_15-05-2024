function dropWhile(array, callback) {
  // Encuentra el índice del primer elemento que no cumple la condición
  const dropIndex = array.findIndex(element => !callback(element));

  // Retorna un nuevo array a partir del índice encontrado
  return dropIndex === -1 ? [] : array.slice(dropIndex);
}

// Ejemplo de uso:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = dropWhile(array, element => element < 5);
console.log(result); 
