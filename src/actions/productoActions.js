import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
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

//Funcion que descarga los productos de la db
export function obtenerProductos() {
    return async (dispatch) => {
        dispatch(descargarProductos())

        try {
            const respuesta = await clienteAxios.get('/productos')
            /* console.log(respuesta.data) */
            dispatch(descargaProductosExitosa(respuesta.data))
        } catch (error) {
            console.log(error)
            dispatch(descargaProductosError(true))
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
const descargaProductosError = estado => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: estado
})

//Selecciona y elimina producto
export function borrarProducto(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))
        /* console.log(id) */

        try {
            clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())

            //si se confirma eliminar
            Swal.fire(
                'Eliminado!',
                'El producto se elimino correctamente.',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch(eliminarProductoError())
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})
const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})
const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})