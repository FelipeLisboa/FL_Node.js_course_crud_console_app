const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina un elemento del listado de tareas', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}