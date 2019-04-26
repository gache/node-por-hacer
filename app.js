// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacar = require('./por-hacer/por-hacer');




let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacar.crear(argv.descripcion);
        console.log(tarea); 
    break;

    case 'listar':
       let listado = porHacar.getListado();

       for ( let tarea of listado) {

           console.log('===========Por Hacer======='.green);
           console.log(tarea.descripcion);
           console.log('Estado: ', tarea.completado);
           console.log('===========Por Hacer======='.green);
       }
        
    break;

    case 'actualizar':
        let actualizado = porHacar.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
    break;


       case 'borrar':
        let borrado = porHacar.borrar( argv.descripcion);
        console.log(borrado);
        
       break;

    default:
    console.log('Comando no es conocido');
    break;
}