import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

//funcion que se va a utiliar en la VISTA

//Crear nuevo producto
export function crearNuevoProducto(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())

        try {
            //insertar en API
            await clienteAxios.post('/productos', producto)
            dispatch(agregarProductoExito(producto))

            //alerta
            Swal.fire(
                'Correcto',
                'El Producto se agrego Correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch(agregarProductoError(true))

            //alerta 
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intente de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})
