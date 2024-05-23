const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resuelta");
  }, 3000);
});
myPromise.then((result) => {
  console.log(result); // Imprime "Promise resuelta" después de 3 segundos
});
