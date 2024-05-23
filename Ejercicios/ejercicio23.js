async function obtenerDatosDesdeArchivo() {
  const rutaArchivoJson = "ejercicio23.json";

  try {
    const response = await fetch(rutaArchivoJson);
    if (!response.ok) {
      throw new Error(`Error al obtener el archivo: ${response.status}`);
    }

    const datos = await response.json();
    // Manipula los datos según tus necesidades
    console.log("Datos obtenidos:", datos);
  } catch (error) {
    console.error("Error al cargar el archivo:", error.message);
  }
}
// Llama a la función asincrónica
obtenerDatosDesdeArchivo();
