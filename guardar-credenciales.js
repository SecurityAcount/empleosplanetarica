// guardar-credenciales.js
const fs = require('fs');

// Obtén los datos enviados desde el formulario
const nombreUsuario = 'usuario1'; // Reemplaza con el valor real
const contrasena = 'clave123'; // Reemplaza con el valor real

// Guarda los datos en un archivo (usuarios.json)
const datos = { usuarios: [] };
datos.usuarios.push({ nombre: nombreUsuario, contrasena });

fs.writeFileSync('usuarios.json', JSON.stringify(datos, null, 2));
