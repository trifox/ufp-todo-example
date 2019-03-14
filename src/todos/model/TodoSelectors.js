import TodoConstants from '../model/TodoConstants'

/**
 * the selectors are a native model part, they map state to values
 *
 * */

/**
 * the main state object of this module
 * @param state
 * @returns {*}
 */
const todosAppSelector = (state) => (
    state[TodoConstants.REDUCER_NAME]
)

/**
 * te current todos, may be undefined
 * @param state
 * @returns {Array|todos|{$push}|{}|{$splice}}
 */
const todosSelector = (state) => (
    todosAppSelector(state).todos
)

/**
 * example for a 'complex' calculation utility selector
 * providing convenience in the view and ensure no calculation
 * is done elsewhere
 * @param state
 * @returns {*|number}
 */
const todosCountSelector = (state) => (
    todosSelector(state).length || 0
)

export default {
    todosCountSelector,
    todosSelector

}
