function operacionCompletada() {
  return new Promise(resolve => setTimeout(() => {
    resolve("Operación completada");
  }, 1000));
}
async function main() {
  const resultado = await operacionCompletada();
  console.log(resultado);
}

// Llamar a la función
main();
