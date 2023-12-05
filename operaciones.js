const fs = require('fs');

// Función para obtener las citas desde el archivo JSON
const obtenerCitas = () => {
  try {
    // Lectura y parseo de 'citas.json' 
    const contenido = fs.readFileSync('citas.json', 'utf8');
    return JSON.parse(contenido) || []; // Devolvemos el contenido parseado o un arreglo vacío si hay un error
  } catch (error) {
    return []; // Devolvemos un arreglo vacío si hay un error al leer o parsear el archivo
  }
};

// Función para registrar una nueva cita
const registrarCita = (nombre, edad, animal, color, enfermedad) => {
  // Obtenemos las citas actualizadas desde el archivo
  const citas = obtenerCitas();

  // Creamos una nueva cita y la agregamos al arreglo
  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  citas.push(nuevaCita);

  // Escribimos las citas actualizadas de vuelta al archivo
  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));

  // Mensaje de confirmación
  console.log(`Cita registrada para: ${nombre}`);
};


// Función para mostrar las citas
const mostrarCitas = () => {
  // Obtenemos las citas desde el archivo
  const citas = obtenerCitas();

  // Verificamos si hay citas o no
  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    // Mostramos cada cita de manera formateada
    citas.forEach((cita, index) => {
      console.log(`\n ${index + 1}. Cita Registrada
    ------------------------------
    Nombre del animal: ${cita.nombre}
    Edad: ${cita.edad}
    Tipo de animal: ${cita.animal}
    Color del animal: ${cita.color}
    Enfermedad: ${cita.enfermedad}`);
    });
  }
};

module.exports = { registrarCita, mostrarCitas };
