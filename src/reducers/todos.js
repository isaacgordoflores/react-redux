const initiaState = [
    { id: 1, desc: 'toDo 1', completed: false },
    { id: 2, desc: 'toDo 2', completed: false },
]
export default (state = initiaState, action) => {
    console.log(state)
    return state
}
