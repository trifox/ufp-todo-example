import update from 'react-addons-update'
import TodoConstants from './TodoConstants'

/**
 * the reducer is the heart of a redux and so an ufp-module, for creating reducers exists
 * manny flavours, in this example it is all kept in place and distinguished using the switch
 * case common patterns and the ufp-core is to use an action-handler pattern defining the
 * actions in a hash map with individual reduce functions
 *
 * TBD
 */

const TodoReducer = (state = {todos: []}, action) => {
    console.log('Todo Reducer', state, action)
    let todoIndexFunc = () => {
        let index = -1
        state.todos.forEach((todo, indexCurrent) => {
            if (todo.id === action.payload.todo.id) {
                index = indexCurrent
            }
        })
        return index
    }
    switch (action.type) {

        case TodoConstants.ADD_TODO:
            return update(state, {
                todos: {
                    $push: [{
                        mark: false,
                        id: `${Date.now()}`,
                        ...action.payload.todo
                    }]
                }
            })
        case TodoConstants.MARK_TODO:

            return update(state, {todos: {[todoIndexFunc()]: {mark: {$set: !state.todos[todoIndexFunc()].mark}}}})
        case TodoConstants.DELETE_TODO:
            return update(state, {todos: {$splice: [[todoIndexFunc(), 1]]}})
        default:
            return state
    }

}

export default TodoReducer
