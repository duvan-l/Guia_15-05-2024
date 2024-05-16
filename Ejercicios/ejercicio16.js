// Creamos la primera Promise que se resuelve después de 1 segundo con el número 5
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

// Creamos la segunda Promise que se resuelve después de 1 segundo con el número 10
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

// Creamos la tercera Promise que se resuelve después de 1 segundo con el número 15
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(15);
  }, 1000);
});

// Encadenamos las tres Promises y sumamos los resultados
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    const sum = results.reduce((acc, num) => acc + num, 0);
    console.log("Resultado final:", sum);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
