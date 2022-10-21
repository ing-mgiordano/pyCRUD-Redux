//Encargado del state completo de la APP

import { createStore, applyMiddleware, compose } from 'redux'
import thunk  from 'redux-thunk'
import reducer from './reducers'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f  //para que funcione la pagina si tenemos intalado Redux devtools o no.
    )
)

export default store