const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./tareas/por-hacer');



let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        if (listado.length == 0) {
            console.log('NO SE ENCONTRARON TAREAS');
        } else {
            for (let tarea of listado) {
                console.log('=========Por hacer========'.green);
                console.log('Descripción : ', tarea.descripcion);
                console.log('Estado : ', tarea.completado);
                console.log('=========================='.green);
            }
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
}