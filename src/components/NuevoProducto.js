import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Actions de Redux
import { crearNuevoProducto } from '../actions/productoActions'

const NuevoProducto = () => {

    //utilizar useDispatch y te retorna una funcion
    const dispatch = useDispatch()
    
    //llamar al action de productoAction
    const agregarProducto = () => dispatch(crearNuevoProducto())

    //Cuando usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault()

        //Validar formulario

        //Si no hay errores

        //Crear nvo producto
        agregarProducto()
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2
                        className='text-center mb-4 font-weight-bold'
                    >Agregar Nuevo Producto</h2>

                    <form
                        onSubmit={submitNuevoProducto}
                    >
                        <div className='form-group'>
                            <label for="nombre-producto">Nombre Producto</label>
                            <input 
                                type="text"
                                id='nombre-producto'
                                className='form-control'
                                placeholder='Nombre Producto'
                                name='nombre'
                            />
                        </div>

                        <div className='form-group'>
                            <label for="precio-producto">Precio Producto</label>
                            <input 
                                type="number"
                                id='precio-producto'
                                className='form-control'
                                placeholder='Precio Producto'
                                name='precio'
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoProducto