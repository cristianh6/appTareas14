const fs = require('fs');

const tareas = require('./tareas.json');

const json = (archivo, trans) => {
    fs.writeFileSync(archivo, trans);
};

/**
  * Esta función se encarga de escribir en el sistema de archivos.
  
  * @parametro archivo: una descripción bonita
  * @parametro valor: una descripción bonita
  * @parametro fn: una descripción bonita
  * @parametro espacio: una descripción bonita
  */
 const escribirEnJSON = (archivo, valor, fn, espacio) => {
    let stringificado = JSON.stringify(valor, fn, espacio)

fs.writeFileSync(archivo, JSON.stringify(valor, fn, espacio))
};


module.exports = {
    listarTareas : () => {
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1} - ${tarea.descripcion} - estado: ${tarea.estado} - ID: ${tarea.id}`);
        });
        return null;
    },
    
    agregarTarea : (tarea) =>{       
        tareas.push(tarea);
        console.log('Tarea agregada!');
        return data(num);
        
    },
    actualizarTarea : (id) => {

        let check = tareas.filter(tarea => tarea.id === id);

        if(check.length === 0){
            return console.log('ID inexistente!!');
        }

        let tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.estado = 'completado';
                return tarea
            }
            return tarea
        })
        
        fs.writeFileSync('./tareas.json',JSON.stringify(tareasActualizadas,null,3))


        return console.log('Tareas actualizadas')
    },
    eliminarTarea : (id) => {

        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.id !== id
        })

        fs.writeFileSync('./tareas.json',JSON.stringify(tareasFiltradas,null,3))

        return console.log('Tarea eliminada')
    },
    filtrarTareas : (estado) => {

        let estadosValidos = ['completado','en proceso', 'pendiente'];

        if(!estadosValidos.includes(estado)){
            return console.log('Estado no válido', estadosValidos);
        }

        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado === estado
        });

        tareasFiltradas.forEach((tarea,index) => {
            console.log(`${index + 1} - ${tarea.descripcion} - estado: ${tarea.estado} - ID: ${tarea.id}`);
        });
        return null
    },
    buscarTarea : (keyword) => {
        let resultado = tareas.filter(tarea => {
            return tarea.descripcion.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
        })
        return console.log(resultado);
    }
    
}
