const datos = new Proxy({}, {
  set(target, prop, value) {
    if (prop === "nombre") {
      if (!/^[a-zA-Z]+$/.test(value)) {
        console.error("Error: El nombre debe contener solo letras.");
        return false;
      }
    }
    // Otras validaciones para otros atributos aquí...
    target[prop] = value;
    return true;
  }
});

// Ejemplo de uso:
datos.nombre = "Ana"; // Correcto
datos.nombre = "123"; // Error: El nombre debe contener solo letras.
