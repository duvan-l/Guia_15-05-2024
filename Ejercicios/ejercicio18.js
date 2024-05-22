const datos = [
  { "nombre": "Ana", "edad": 25 },
  { "nombre": "Carlos", "edad": 30 },
  { "nombre": "Andrea", "edad": 22 },
  { "nombre": "Fabiano", "edad": 18 },
  { "nombre": "Andres", "edad": 15},
];


const nombresConA = datos.filter((elemento) => elemento.nombre.startsWith("A"));

console.log(nombresConA);
  


