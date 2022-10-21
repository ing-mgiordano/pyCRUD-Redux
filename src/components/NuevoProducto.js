import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//Actions de Redux
import { crearNuevoProducto } from '../actions/productoActions'

const NuevoProducto = () => {

    //redireccion
    const navigate = useNavigate()

    //state del componenet
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)

    //utilizar useDispatch y te retorna una funcion
    const dispatch = useDispatch()

    //acceder y leer el state del store
    const cargando = useSelector(state => state.productos.loading)
    const error = useSelector(state => state.productos.error)
    /* console.log(cargando, error) */

    //llamar al action de productoAction
    const agregarProducto = producto => dispatch(crearNuevoProducto(producto))

    //Cuando usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault()

        //Validar formulario
        if(nombre.trim() === '' || precio <= 0) {
            return;
        }
        //Si no hay errores

        //Crear nvo producto
        agregarProducto({
            nombre,
            precio
        })

        //redireccion
        navigate('/')
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
                            <label 
                                htmlFor="nombre-producto"
                            >Nombre Producto</label>
                            <input 
                                type="text"
                                id='nombre-producto'
                                className='form-control'
                                placeholder='Nombre Producto'
                                name='nombre'
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label 
                                htmlFor="precio-producto"
                            >Precio Producto</label>
                            <input 
                                type="number"
                                id='precio-producto'
                                className='form-control'
                                placeholder='Precio Producto'
                                name='precio'
                                value={precio}
                                onChange={e => setPrecio(Number(e.target.value))}
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                        >Agregar</button>
                    </form>

                    { cargando ? <p>Cargando..</p> : null }
                    { error ? <p  className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p> : null }
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoProducto
