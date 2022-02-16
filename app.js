const process = require("process")

const {listarTareas,agregarTarea,actualizarTarea,eliminarTarea, filtrarTareas, buscarTarea} = require('./tareas');

const accion = process.argv[2];

switch (accion) {
    case "listar":
        listarTareas()
        break;
    case "+":
        let descripcion = process.argv[3];
        if(!descripcion){
            console.log("Debe agregar una descripción");
            break;
        }
        let nuevaTarea = {
            id : new Date().getTime(),
            descripcion,
            estado : "pendiente"
        }
        agregarTarea(nuevaTarea)
        break;
    case "actualizar" :
        actualizarTarea(+process.argv[3])
        break;
    case "eliminar" : 
        eliminarTarea(+process.argv[3]);
    case "filtrar":
        filtrarTareas(process.argv[3]);
        break;
    case "buscar":
        buscarTarea(process.argv[3])
        break;
    case undefined : 
        console.log("Debes indicar una accion")
        break;
    
    default:
        break;
}