import TodoConstants from '../model/TodoConstants'

/**
 * the selectors are a native model part, they map state to values
 *
 * */

const todosAppSelector = (state) => (
    state[TodoConstants.REDUCER_NAME]
)

const todosSelector = (state) => (
    todosAppSelector(state).todos
)

export default {

    todosSelector

}
