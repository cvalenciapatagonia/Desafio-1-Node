// Importo las funciones 'registrarCita' y 'mostrarCitas' desde el archivo 'operaciones.js'
const { registrarCita, mostrarCitas } = require('./operaciones');

// Obtenemos los argumentos de la línea de comandos
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

// Operación sin distincion de mayúsculas o minúsculas
const operacionLowerCase = operacion.toLowerCase();

// Verificacion de la operación con variables registrar y leer mas validacion
if (operacionLowerCase === 'registrar') {
  registrarCita(nombre, edad, animal, color, enfermedad);
} else if (operacionLowerCase === 'leer') {
  mostrarCitas();
} else {
  // Mensaje en caso que la operacion no corresponda
  console.log(`No existe la operacion "${operacion}". Operaciones existentes "registrar" y "leer".`);
}