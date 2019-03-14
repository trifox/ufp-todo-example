import TodoConstants from '../model/TodoConstants'

const todosAppSelector = (state) => (
    state[TodoConstants.REDUCER_NAME]
)
const todosSelector = (state) => (
    todosAppSelector(state).todos
)

export default {

    todosSelector

}
