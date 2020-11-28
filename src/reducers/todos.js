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
    console.log(action)
    return state
}
