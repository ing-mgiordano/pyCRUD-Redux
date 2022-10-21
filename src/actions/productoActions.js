import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types";

//funcion que se va a utiliar en la VISTA

//Crear nuevo producto
export function crearNuevoProducto() {
    return () => {
        console.log('desde action')
    }
}