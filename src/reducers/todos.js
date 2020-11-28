const initialState = [
    { id: 1, desc: 'toDo 1', completed: false },
    { id: 2, desc: 'toDo 2', completed: false },
]

const COMPLETE = 'COMPLETE' 

export const complete = id => ({
    type: COMPLETE,
    payload: id,
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
        default:
            return state
    }

    return state
}
