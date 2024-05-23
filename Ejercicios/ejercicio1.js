function imprimirNumerosSetInterval(desde, hasta) {
  let contador = desde;
  const intervalo = setInterval(() => {
    console.log(contador);
    if (contador === hasta) {
      clearInterval(intervalo);
    }
    contador++;
  }, 1000);
}
imprimirNumerosSetInterval(1, 5);

// Se inicializa una variable contador con el valor desde.
// Se crea un intervalo usando setInterval, que ejecuta una función cada segundo.
// En cada ejecución de la función, se imprime el valor de contador.
// Se verifica si contador ha alcanzado el valor hasta.En ese caso, se detiene el intervalo con clearInterval.
// Se incrementa contador en 1 en cada ejecución.


//----------------------------------------------------------------


function imprimirNumerosTimeout(desde, hasta) {
  function imprimir(contador) {
    console.log(contador);
    if (contador < hasta) {
      setTimeout(() => imprimir(contador + 1), 6000);
    }
  }
  imprimir(desde);
}
imprimirNumerosTimeout(1, 5);

// Se define una función interna imprimir que toma un argumento contador.
// Dentro de esta función, se imprime el contador.
// Se verifica si contador es menor que hasta.Si es así, se establece un temporizador para llamar a imprimir con el próximo valor de contador después de 1 segundo.
// La función imprimir se llama inicialmente con el valor desde.