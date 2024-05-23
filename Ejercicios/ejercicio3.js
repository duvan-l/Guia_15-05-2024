function map(arr, callback) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    // Ejecuta el callback con el elemento actual del array y guarda el resultado
    const resultadoCallback = callback(arr[i]);
    // Agrega el resultado al nuevo array
    resultado.push(resultadoCallback);
  }
  return resultado;
}
const numeros = [1, 2, 3, 4, 5];
const cuadrados = map(numeros, function (numero) {
  return numero * numero;
});
console.log(cuadrados); // Output: [1, 4, 9, 16, 25]
