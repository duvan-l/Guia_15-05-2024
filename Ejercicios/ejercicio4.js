function filter(arr, callback) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    // Ejecuta el callback con el elemento actual del array
    if (callback(arr[i])) {
      // Si el callback devuelve true, agrega el elemento al nuevo array
      resultado.push(arr[i]);
    }
  }
  return resultado;
}
const numeros = [1, 2, 3, 4, 5];
const numerosPares = filter(numeros, function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // Output: [2, 4]
