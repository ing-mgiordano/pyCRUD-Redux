import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

//Redux
import { useDispatch } from 'react-redux'
import { borrarProducto, editarProducto } from '../actions/productoActions'

const Producto = ({producto}) => {

    const { nombre, precio, id } = producto

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Confirmacion de eliminar
    const confirmarEliminarProducto = id => {
        //preguntarle al usuario
        Swal.fire({
            title: 'Estas seguro?',
            text: "Producto eliminado no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                //pasarle el action
                dispatch(borrarProducto(id))
            }
        })
    }

    const redireccionarEdicion = producto => {
        dispatch(editarProducto(producto))
        navigate(`/productos/editar/${producto.id}`)
    }

  return (
    <tr>
        <td>{nombre}</td>
        <td>
            <span
                className='font-weight-bold'
            >$ {precio}
            </span>
        </td>
        <td
            className='acciones'
        >
            <button 
                type='button'
                className='btn btn-primary mr-2'
                onClick={() => redireccionarEdicion(producto)}
            >
                Editar
            </button>

            <button
                type='button'
                className='btn btn-danger'
                onClick={() => confirmarEliminarProducto(id)}
            >
                Elimnar
            </button>
        </td>
    </tr>
  )
}

export default Producto
