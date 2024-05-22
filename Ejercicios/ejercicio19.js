async function obtenerDatosEspecificos() {
  const urlArchivoJson = "ejercicio17.json";

  try {
    const response = await fetch(urlArchivoJson);
    if (response.ok) {
      const datos = await response.json();
      // Manipula los datos según tus necesidades
      // Por ejemplo, si los datos son una lista de objetos:
      datos.forEach(item => {
        console.log(`Nombre: ${item.nombre}, Edad: ${item.edad}`);
      });
    } else {
      console.error("Error al obtener los datos:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

// Llama a la función asincrónica
obtenerDatosEspecificos();

