const initialState = [
    { id: 1, desc: 'toDo 1', completed: false },
    { id: 2, desc: 'toDo 2', completed: false },
]

/**
 * Tipos ¿?
 */
const COMPLETE = 'COMPLETE' 
const SUBMIT = 'SUBMIT'
const START_SUBMIT = 'START_SUBMIT'
const ERROR_SUBMIT = 'ERROR_SUBMIT'

export const complete = id => ({
    type: COMPLETE,
    payload: id,
})

export const submit = text => ({
    type: SUBMIT,
    payload: {
        id: Math.random().toString(36),
        desc: text,
        completed: false,
    },
})

export const startSubmit = () => ({
    type: START_SUBMIT, // Ver linea 8
})

export const errorSubmit = () => ({
    type: ERROR_SUBMIT, // Ver linea 9
    error,
})

export default (state = initialState, action) => {

    switch(action.type){
        case COMPLETE:
            return state.map(x => x.id === action.payload ? ({ ...x, completed: !x.completed}) : x)
            /**
             * Con state.map() creo un array nuevo
             * Entonces comparo los id que tengo con el que viene dentro de payload
             * Si son los mismos, creo una copia del objeto x (...x) y le cambio la propiedad completed
             * A la anterior (anterior a ser clicado)
             */
        case SUBMIT: {
            return [action.payload].concat(state);
        }
            
        default:
            return state
    }
}

export const saveTodo = text => async (dispatch, getState) => { // Obtengo el estado completo de la aplicacion con dispatch y getState
    dispatch(startSubmit()) // despacho la accion que indica el inicio de la accion (declarada en linea 23)

    const state = getState()
    console.log(state);

    /**
     * Intento ejecutar con try esta porcion de codigo entre {} de lo contrario se ejecuta catch
     */ 
    try {
        // Llamada a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        
        dispatch(submit()) // Despacha la accion text en caso de éxito de la petición

    } catch(e) {
        dispatch(errorSubmit(e))
    }
}