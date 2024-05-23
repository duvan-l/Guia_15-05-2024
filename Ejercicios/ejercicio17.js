fetch("ejercicio17.json")
  .then(response => response.json())
  .then(data => {
    console.log('Datos obtenidos:', data);
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
