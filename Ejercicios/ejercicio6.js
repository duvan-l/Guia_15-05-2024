function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // Ejecuta el callback con el elemento actual del array
    if (callback(arr[i])) {
      // Si el callback devuelve true para algún elemento, retorna true
      return true;
    }
  }
  // Si ninguna llamada al callback devolvió true, retorna false
  return false;
}
const numeros = [1, 3, 5, 7, 8];
const algunPar = some(numeros, function (numero) {
  return numero % 2 === 0;
});
console.log(algunPar); // Output: true

const numeros2 = [1, 3, 5, 7, 9];
const algunPar2 = some(numeros2, function (numero) {
  return numero % 2 === 0;
});
console.log(algunPar2); // Output: false
