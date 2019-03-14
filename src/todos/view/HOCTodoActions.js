import {connect} from 'react-redux'
import TodoActionCreators from '../controller/TodoActionCreators'

/**
 * this higher order component is used to inject the todos action creators
 * into the properties of an component to be used from there
 *
 * usage:
 *
 * import HOCTodoActions from '...HOCTodoActions'
 * ... component definition ...
 * export default HOCTodoActions(Component)
 */

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    addTodo: TodoActionCreators.addTodo,
    deleteTodo: TodoActionCreators.deleteTodo,
    markTodo: TodoActionCreators.markTodo
}

export default connect(mapStateToProps, mapDispatchToProps)

