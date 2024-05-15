function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // Ejecuta el callback con el elemento actual del array
    if (!callback(arr[i])) {
      // Si el callback devuelve false para algún elemento, retorna false
      return false;
    }
  }
  // Si todas las llamadas al callback devolvieron true, retorna true
  return true;
}

// Ejemplo de uso:
const numeros = [2, 4, 6, 8, 10];
const todosPares = every(numeros, function (numero) {
  return numero % 2 === 0;
});
console.log(todosPares); // Output: true

const numeros2 = [2, 4, 5, 8, 10];
const todosPares2 = every(numeros2, function (numero) {
  return numero % 2 === 0;
});
console.log(todosPares2); // Output: false
