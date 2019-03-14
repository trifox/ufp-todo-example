/**
 *
 * following MVC principles the action creators naturally reside in the controller module,
 * here the desired actions for the todo module are defined, respectively creating, marking
 * and deleting of todos is provided each time the signature of the function is kept as similar
 * as possible, tossing around the todos object in the todos named property of each action makes
 * for an easy interface
 *
 * */
import TodoConstants from '../model/TodoConstants'

const deleteTodo = ({todo}) => {
    return {
        type: TodoConstants.DELETE_TODO,
        payload: {todo}
    }
}

const markTodo = ({todo}) => {
    return {
        type: TodoConstants.MARK_TODO,
        payload: {todo}
    }
}

const addTodo = ({todo}) => {
    return {
        type: TodoConstants.ADD_TODO,
        payload: {todo}
    }
}
export default {
    addTodo,
    markTodo,
    deleteTodo
}
