function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Ejemplo de uso:
delay(3000).then(() => alert("Se ejecuta después de 3 segundos"));
